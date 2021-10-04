// Q1. make a string out of an array
  {
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(" "); // 스트링으로 변환
    console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result2 = fruits.split(',', 2); // 구분자, 어디까지 받을 지의 숫자
    console.log(result2);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result3 = array.reverse();
    console.log(result3);
    console.log(array) // 배열 전체를 거꾸로 바꿔버림
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result4 = array.slice(2, 5); // 마지막 인덱스는 배제되기 때문에 5
    console.log(result4);
    // splice 배열 자체를 수정, slice는 배열에서 원하는 부분만 리턴해서 받아오고 싶을 때 사용
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    const result5 = students.find ((student) => student.score === 90);
    console.log(result5);
  }
  // find: 주어진 함수에 만족하는 첫번째 값을 리턴

  // Q6. make an array of enrolled students
  {
    const result6 = students.filter((student) => student.enrolled);
    console.log(result6);
  }
  // filter: 주어진 함수에 만족하는 모든 값을 배열로 만들어 줌

  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result7 = students.map((student) => student.score);
    console.log(result7);
  }
  // map: 주어진 함수에 만족하는 배열 안에 있는 값들을 원하는 값들의 집합(배열)으로 만들어 줌
  
  // Q8. check if there is a student with the score lower than 50
  {
    const result8 = students.some((student) => student.score < 50);
    const result81 = students.every((student) => student.score < 50);
    console.log(result8);
    console.log(result81);
  }
  // some: 배열 안에 조건에 만족되는 것이 하나라도 있다면 true, 반대면 false
  // every: 배열 안에 조건에 만족되는 것이 모두 있다면 true, 하나라도 부합하면 false
  
  // Q9. compute students' average score
  {
    const result9 = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result9 / students.length);
  }
  // reduce: 원하는 값들을 누적 시킬 수 있음
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
   const result10 =  students
    .map((student) => student.score)
    .filter((score) => score > 50)
    .join();
   console.log(result10);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
   const result11 = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
   console.log(result11);
  }
  // sort: ((a, b) => a - b) => 값이 마이너스가 되면 작은 것으로 간주하여 작은 값부터 정렬함