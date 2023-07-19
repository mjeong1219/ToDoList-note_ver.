const btn = document.getElementById("btn");  // 입력 버튼
let addValue = document.getElementById("addValue");  // 입력값
let result = document.getElementById("result");  // 입력된 결과
let checkBox = document.getElementById("checkBox");


// 할 일 추가하기
function addToDo(){
    if(addValue.value == false){  // 값이 아무 것도 없을 때
        alert("내용을 입력하세요.");
    }else{  // 값이 있을 때
        let list = document.createElement("li");  // <li>가 생성된다.
        let del = document.createElement("button");  // <li> 옆 삭제 버튼
        
        list.innerHTML = addValue.value;  // 생성되는 <li>가 HTML에 출력된다. 입력값을 넣은 채.
        result.appendChild(list);  // HTML의 div에 연결하여 div에 li가 생성되도록 한다.
        list.appendChild(del);  // 
        del.innerText = "X";  // del에 입력값 X를 넣음.
        // =============== 여기까지 li와 del 생성코드 ================

        del.style.fontSize = "20px";
        del.style.border = "none";
        del.style.float = "right";
        del.style.right = "17px";
        del.style.marginTop = "10px";
        del.style.cursor = "pointer";
        del.style.position = "relative";

        del.addEventListener("click", deleteList);  // X에 클릭 했을 때 deleteList가 실행된다.
        addValue.value = "";  // 입력하고 추가 버튼을 누르면 빈칸이 됨.
        addValue.focus();  // 입력창에 포커스 ... HTML에 autofocus 있는데?
        list.addEventListener("click", function(){  // list를 클릭하면 실행된다.
            list.style.textDecoration = "line-through";
            list.style.color = "red";
        });
    }
}

// 할 일 목록 삭제시
function deleteList(e){  // 위에서 이벤트를 한다고 했으므로 e를 받아와야 함.
    let removeOne = e.target.parentElement;  // 삭제할 요소의 부모에 타겟을 줌.
    removeOne.remove();  // x만 사라지는게 아니고 li 전체가 사라져야하기 때문에.
}

// 전체삭제시
function allClearList(e){
    if(confirm("정말 삭제하시겠습니까?") == true){  // 확인을 눌렀을 때
        if(result.innerHtml == ""){  // 목록칸이 비어있을 때. 삭제할 게 없을 때
            alert("삭제할 목록이 없습니다.");
        }else{
            result.innerText = "";  // 결과값<li>을 전체 비워줌.
        }
    }else{  // 취소를 눌렀을 때
        return false; // 삭제 취소
    }
}