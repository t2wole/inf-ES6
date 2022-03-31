// 실행은 ctrl + alt + n

// set 사용법
// 생성 -> new
// 추가 -> add
// 삭제 -> delete

// 생성
let arr1 = new Set();   // 비어있는 set(집합)을 하나 생성.
console.log(arr1);      // object set 객체를 반환     

// 추가
arr1.add('A');
arr1.add('B');
console.log(arr1);
console.log(arr1[0]);   //'A'가 아니라 undefined 출력
arr1.add('B');
console.log(arr1);      // set은 중복값을 넣어도 변화없음

console.log("arr1의 사이즈는 " + arr1.size); // 2가 출력됨

// 삭제 특정값만
arr1.delete('B');
console.log(arr1);

// 삭제 한꺼번에
arr1.clear();
console.log(arr1);