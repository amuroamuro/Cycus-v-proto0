// 지원여부확인
if (!window.indexedDB) {
    window.alert("browser doesn't support IndexedDB")
} else {
    var db;
    var request = window.indexedDB.open('myDataBase');
    
    // 새로만들거나 버전이 높을때만 발생하는 이벤트 
    // ObjectStroe를 만들거나 수정할때 이 이벤트내에서 진행
    // onsuccess는 이 이벤트가 끝나면 발생됩니다.
    request.onupgradeneeded = function(event) {
    	var db = event.target.result;
        // person 이라는 이름으로 ObjectStore를 만듬, key를 따로 만들지 않고 자동생성함.
        var objectStore = db.createObjectStore('CycusProto', {keyPath: 'type'});
    }
    request.onerror = function(event) {
    	alert('failed');
    }
    request.onsuccess = function(event) {
    	db = this.result;
    }
}