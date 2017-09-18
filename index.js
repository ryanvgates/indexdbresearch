document.getElementById("add").onclick = AddClick;

function AddClick(e){
    var idbKey = document.getElementById("key").value;
    var idbValue = document.getElementById("value").value;
    idbKeyval.set(idbKey, idbValue)
    .then(() => console.log("setting the key to " + idbKey + " and value to " + idbValue))
    .catch(err => console.log('It failed!', err));
    idbKeyval.get(idbKey).then(val => console.log(val));
};