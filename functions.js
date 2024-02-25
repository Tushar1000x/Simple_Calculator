
    const buttons = document.querySelectorAll('.btn');
    const output = document.querySelector('.output');

    var s='';
    buttons.forEach(button => {
        button.addEventListener('click',(e)=>{
        const value = e.target.textContent;
      if (value === 'RESET') {
            output.textContent = '';
            s='';
        } else if (value === '=') {
            const result = eval(output.textContent);
            output.textContent = result;
            s=result;
        }
        else if(value=== 'DEL'){
            s=s.slice(0,-1);
            output.textContent = s;
        } else {
            s += value;
            output.textContent = s;
        }});
    });




