
const search = ()=>{
    const searchBox = document.getElementById('search-box').value.toUpperCase();
   /* const store = document.getElementById('product-list')*/
    const image = document.querySelectorAll('.image')
    const title = document.getElementsByTagName('h3')

    for(let i=0;i<title.length;i++){
        let match = image[i].getElementsByTagName('h3')[0]
        if(match){
            let textValue = match.textContent || match.innerHTML
            if(textValue.toUpperCase().indexOf(searchBox) > -1){
                image[i].style.display = ''
            }else{
                image[i].style.display = 'none'
            }
        }
    }
}