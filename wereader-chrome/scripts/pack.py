import os
import shutil
import zipfile

def pack():
    #复制 Chrome 扩展文件夹至桌面
    home = os.path.expanduser("~")
    extension_repo_path = r'{}\Documents\GitHub\wereader\wereader-chrome'.format(home)
    desktop_extension_path = r'{}\Desktop\wereader-chrome'.format(home)
    try:
        print('复制：{}=>{}'.format(extension_repo_path, desktop_extension_path))
        shutil.copytree(extension_repo_path, desktop_extension_path)
    except Exception as e:
        print('文件移动失败：')
        print(e)
        return

    #删除发布所不需要的文件和文件夹
        #data 文件夹
    shutil.rmtree(desktop_extension_path + r'\data', ignore_errors=True)
    print('删除：\\data')
        #scripts 文件夹
    shutil.rmtree(desktop_extension_path + r'\scripts', ignore_errors=True)
    print('删除：\\scripts')
        #其他文件
    files_need_remove = [r'.gitignore']
    for file_name in files_need_remove:
        try:
            os.remove(desktop_extension_path + '\\' + file_name)
            print('删除：' + file_name)
        except Exception as e:
            print('文件删除失败：')
            print(e)
            return
        

    #压缩文件夹
    startdir = desktop_extension_path  #要压缩的文件夹路径
    zip_name = startdir +'.zip' # 压缩后压缩包的名字
    z = zipfile.ZipFile(zip_name,'w',zipfile.ZIP_DEFLATED)
    for dirpath, dirnames, filenames in os.walk(startdir):
        fpath = dirpath.replace(startdir,'') #不 replace 时会从根目录开始复制
        fpath = fpath and fpath + os.sep or ''#实现当前文件夹以及包含的所有文件的压缩
        for filename in filenames:
            z.write(os.path.join(dirpath, filename),fpath+filename)
            print('压缩：' + filename)
    shutil.rmtree(desktop_extension_path, ignore_errors=True)
    print('删除：' + desktop_extension_path)
    print ('打包完毕')
    z.close()

if __name__ == "__main__":
    pack()