'use strict';

var zlib = window.pako;
var IMG_TYPE = 1;
var IMG_TYPE_MAP = [];
var mColumnCount = 0;
var mRowCount = 0;
var mBaseData = {};
var mSheetID = "mSheetID";
var mSheetName = " Wed tool 2.8";
var mFileReader = null;
var mFileInput = "";

function AddRow(id,data)
{
    resetSheet(id);
    $$(id).parse(data);
}
function resetSheet(id)
{
    $$(id).config.columnCount = 0;
    $$(id).config.rowCount = 0;
    $$(id).reset();
}

var use_structure = "";
var st_header_list = [];
var TEMP_INFO = `
#define testDefine1             5
#define Testdfine2              10
typedef struct
{
}
WORLD_REGION_INFO;
//*.WREGION file format structure

typedef struct
{
}
LEVEL_INFO;
//005_00001.IMG file format structure

typedef struct
{
}
ITEM_INFO;
//005_00002.IMG file format structure

typedef struct
{
}
GRADE_INFO_FOR_SKILL;
//structure for SKILL_INFO

typedef struct
{
}
SKILL_INFO;
//005_00003.IMG file format structure

typedef struct
{
}
MONSTER_INFO;
//005_00004.IMG file format structure

typedef struct
{
}
NPC_INFO;
//005_00005.IMG file format structure

typedef struct
{
}
QUEST_INFO;
//005_00006.IMG file format structure
`;