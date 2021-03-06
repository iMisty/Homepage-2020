/*
 * @Author: Miya
 * @Date: 2021-03-17 17:47:14
 * @LastEditTime: 2021-03-17 17:57:06
 * @LastEditors: Miya
 * @Description: Logo Components
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\components\logo.tsx
 * @Version: 1.0
 */
import { defineComponent, reactive } from 'vue';
import '../style/logo.less';

import LogoImg from '../assets/logo_w.png';

const data = reactive({});

const Logo = defineComponent({
  setup() {
    data;
    return { data };
  },

  render() {
    return (
      <div class="logo">
        <img class="logo--img" src={LogoImg} />
      </div>
    );
  },
});

export default Logo;
