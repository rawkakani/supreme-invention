import postHtml from "npm:posthtml";
import customElements  from 'npm:posthtml-custom-elements'


/**
 * @name authService
 * This is a test function
 */

export default (props) => {
    window.oncontextmenu = function ()
    {
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event
        console.log('we are going to go wild in this editor')
        return false;     // cancel default menu
    }
   
}

export const onBuild = async () => {

//    const postHtml =  await import(`npm:posthtml`);
//    const customElements =  await import(`npm:posthtml-custom-elements`);
   
   const html = '<div>hello</div>'
   let res;
 
   await postHtml()
   .use(customElements())
   .process(html).then((result) => res = result.html)


    const sum = 1 + 1 + 1;
    return {sum, res}
}