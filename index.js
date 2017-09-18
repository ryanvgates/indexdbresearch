document.getElementById("add").onclick = AddClick;
document.getElementById("logKeysToConsole").onclick = () => idbKeyval.keys().then(val => console.log(val));
document.getElementById("delete").onclick = () => idbKeyval.delete(document.getElementById("key").value);
document.getElementById("clear").onclick = () => idbKeyval.clear();

function AddClick(e){
    var idbKey = document.getElementById("key").value;
    var idbValue = document.getElementById("value").value;
    idbKeyval.set(idbKey, idbValue)
    .then(() => console.log("setting the key to " + idbKey + " and value to " + idbValue))
    .catch(err => console.log('It failed!', err));    
};