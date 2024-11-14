if(!window.indexedDB) {
        //시발 지원안된다고 말하셈.
} else{
    const Req = indexedDB.open("DB", 2);
    let db;
    Req.addEventListener('success', function(event) {
        db = event.target.result;
    });
    Req.addEventListener('error', function(event) {
        var error = event.target.error;
        alert("Holy shit, ERROR : ", error.name);
    });
    Req.addEventListener('upgradeneeded', function(event){
        db = event.target.result;
        db.createObjectStore('CycusProto0', {keyPath:'type', autoIncrement:false});
    });
}
//아아아아!!!!!!!!!!!!
//시발 젠장!!!!
//다시생각해보니 indexedDB가 필요가 없었어!!!!!!
//젠장!!!!!!!
//아아아아아아아아아아!!!!!!!!
//그냥 로컬스토리지만 있었으면 됐는데!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!