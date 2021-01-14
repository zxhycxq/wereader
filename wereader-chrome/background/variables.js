var Config = {
    s1Pre: "",
    s1Suf: "",
    s2Pre: "**",
    s2Suf: "**",
    s3Pre: "",
    s3Suf: "",
    lev1: "## ",
    lev2: "### ",
    lev3: "#### ",
    thouPre: "```\n",
    thouSuf: "\n```",
    thouMarkPre: "```\n",
    thouMarkSuf: "\n```",
    checkedRe: [],
    codePre: "```",
    codeSuf: "```",
    displayN: false,
    addThoughts: false,
    backupName: "默认设置",
    re: [],
    flag: 0
}

//用于检查格式（删除多余的键值）
const syncConfigTemplate = {
    s1Pre: "",
    s1Suf: "",
    s2Pre: "**",
    s2Suf: "**",
    s3Pre: "",
    s3Suf: "",
    lev1: "## ",
    lev2: "### ",
    lev3: "#### ",
    thouPre: "```\n",
    thouSuf: "\n```",
    thouMarkPre: "```\n",
    thouMarkSuf: "\n```",
    checkedRe: [],
    codePre: "```",
    codeSuf: "```",
    displayN: false,
    addThoughts: false,
    backupName: "默认设置",
    re: [],
    flag: 0
}
//用于检查格式（删除多余的键值）
const backupTemplate = {
    s1Pre: "",
    s1Suf: "",
    s2Pre: "**",
    s2Suf: "**",
    s3Pre: "",
    s3Suf: "",
    lev1: "## ",
    lev2: "### ",
    lev3: "#### ",
    thouPre: "```\n",
    thouSuf: "\n```",
    thouMarkPre: "```\n",
    thouMarkSuf: "\n```",
    checkedRe: [],
    codePre: "```",
    codeSuf: "```",
    displayN: false,
    addThoughts: false,
    re: [],
    flag: 0
}

var bookId = "null"
var importBookId = "null"
var background_bookcontents = ""
var background_currentContent = ""
const background_storageErrorMsg = "存储出错"
const background_bookcontents_default = "getBookContents"
const background_backupKey = "backup"
//保存图片Markdown文本的数组
var markedData = []
//用于记录 popup 是否请求复制目录
var isCopyContent = false;