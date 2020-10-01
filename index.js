function main() {
  function1();
  console.log(function2());
  function3();

}

function function1() {}

function2 = (n) =>{
  return n <= 1 ? "error" : (n + 4)/Math.sqrt(n-1)
}

function function3() {}
main();
