import { mapState } from 'vuex';
import { getValFromUrl } from 'Utils';
import { getCookie } from '@/utils/cookie';

export default {
  created(){
    if(!this.isLogin){
      if(u){
        this.$store.dispatch('userLogin', u);
      }
      console.log("未登入");
    }else{
      console.log("登入");
    }
  },
  data() {
    return {

    }
  },
  mounted(){

  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo.profile,
      isLogin: state => state.userInfo.isLogin,
    }),
  },
  updated(){
  }
}