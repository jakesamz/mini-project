import MessageBox from '../components/common/MessageBox.vue'

const message = {
  duration: 3000,
  install(Vue, options) {

    Vue.component('message-box', MessageBox);

    function createMessageBox(text, visible) {

      console.log('creating box...', text)
      let MessageComp = Vue.extend(MessageBox);
      let messageComp = new MessageComp().$mount();
      document.body.append(messageComp.$el);
      messageComp.text = text;
      if(visible === undefined) {
        messageComp.visible = true;
      }

      let timer = setTimeout(()=> {
        setTimeout(() => console.log('setTimeout...exit'))
        Promise.resolve().then(() => {
          messageComp.$destroy();
          timer = null;
          document.body.removeChild(messageComp.$el);
          console.log('removed...')
        })
        messageComp.visible = false;
        // messageComp.$nextTick().then(()=> {
        //   
        //   timer = null;
        //   document.body.removeChild(messageComp.$el);
        // })
       
        // setTimeout(() => {
        //   messageComp.$destroy();
        //   timer = null;
        //   document.body.removeChild(messageComp.$el);
        // });
      }, message.duration)

      return messageComp;
    }


    Vue.prototype.$message1 = function(text, visible){
      return createMessageBox(text);
    }
  }
}

export default message;