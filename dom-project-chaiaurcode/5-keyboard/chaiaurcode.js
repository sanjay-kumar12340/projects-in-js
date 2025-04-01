// const insert = document.getElementById('insert')  

// window.addEventListener('keydown', (e) => {
//     insert.innerHTML = `
//     <div class="color">
//     <table>
//   <tr>
//     <th>key</th>
//     <th>keycode</th>
//     <th>code</th>
//   </tr>
//   <tr>
//     <td>${e.key}</td>
//     <td>${e.keycode}</td>
//     <td>${e.code}</td>
//   </tr>
  
// </table>
//     </div>
//     `;
// })


    const insert = document.getElementById('insert');  

    window.addEventListener('keydown', (e) => {
        insert.innerHTML = `
        <div class="color">
        <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ?'Space': e.key}</td>
            <td>${e.keyCode}</td>  <!-- keyCode is still available, but prefer e.key or e.code -->
            <td>${e.code}</td>
        </tr>
        </table>
        </div>
        `;
    }); 