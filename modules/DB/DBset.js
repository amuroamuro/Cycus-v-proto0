function dbSet() {
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
}