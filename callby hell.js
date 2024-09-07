const fun = () => {
  setTimeout(() => {
    console.log("hello");
    setTimeout(() => {
      console.log("hello");
      setTimeout(() => {
        console.log("hello");

        setTimeout(() => {
          console.log("hello");
          setTimeout(() => {
            console.log("hello");
            setTimeout(() => {
              console.log("hello");
              setTimeout(() => {
                console.log("hello");
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
fun();
