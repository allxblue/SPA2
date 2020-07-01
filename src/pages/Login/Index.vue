<template>
  <div class="login-page">
    <div class="login-panel" :class="{ fallDown: isTriggerLogin }">
      <div class="title">
        <span>Login to your account</span>
      </div>
      <div class="form form-login">
        <div class="form-group username" :class="{ focus: isUsernameFocus }">
          <div class="icon spa-icon-person"></div>
          <input
            class="input-ele"
            placeholder="Username"
            type="text"
            name="username"
            autocomplete="off"
            @focus="isUsernameFocus = true"
            @blur="isUsernameFocus = false"
          />
        </div>
        <div class="form-group pwd" :class="{ focus: isPasswordFocus }">
          <div class="icon spa-icon-lock"></div>
          <input
            class="input-ele"
            placeholder="Password"
            type="password"
            name="password"
            @focus="isPasswordFocus = true"
            @blur="isPasswordFocus = false"
          />
          <div class="validation">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png"
            />
          </div>
        </div>
        <div class="action-btns">
          <input
            type="submit"
            class="base-btn"
            value="Log In"
            @click="isTriggerLogin = true"
          />
          <div class="forgot">
            <a href="#">Forgotten password?</a>
          </div>
        </div>
      </div>
      <div class="success">
        <h2>Authentication Success</h2>
        <p>Welcome back</p>
      </div>
      <div class="disclaimer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper
          laoreet placerat. Nullam semper auctor justo, rutrum posuere odio
          vulputate nec.
        </p>
      </div>
    </div>
    <div class="authent">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/puff.svg" />
      <p>Authenticating...</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",

  data() {
    return {
      isUsernameFocus: false,
      isPasswordFocus: false,
      isTriggerLogin: false
    };
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Gudea:400, 700");

// https://codepen.io/jcoulterdesign/pen/azepmX
.login-page {
  perspective: 800px;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  font-family: "Gudea", sans-serif;
  background: #ea5c54;
  background: linear-gradient(135deg, #ea5c54 0%, #bb6dec 100%);

  .authent {
    display: none;
    background: #35394a;

    position: absolute;
    left: 0;
    right: 90px;
    margin: auto;
    width: 100px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    padding: 20px 70px;
    top: 200px;
    bottom: 0;
    height: 70px;
    opacity: 0;

    p {
      text-align: center;
      color: white;
    }
  }

  .success {
    display: none;
    color: rgb(213, 216, 226);
    p {
      font-size: 14px;
    }
  }

  p {
    color: #5b5e6f;
    font-size: 10px;
    text-align: left;
  }

  .fallDownLeft {
    left: -320px !important;
  }

  .fallDown {
    box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
    pointer-events: none;
    top: -100px !important;
    transform: rotateX(70deg) scale(0.8) !important;
    opacity: 0.6 !important;
    filter: blur(1px);
  }

  // 登入區塊
  .login-panel {
    opacity: 1;
    top: 20px;
    -webkit-transition-timing-function: cubic-bezier(0.68, -0.25, 0.265, 0.85);
    transition-property: transform, opacity, box-shadow, top, left;
    transition-duration: 0.5s;
    transform-origin: 161px 100%;
    transform: rotateX(0deg);
    position: relative;

    .validation {
      position: absolute;
      z-index: 1;
      right: 10px;
      top: 6px;
      opacity: 0;
    }

    .disclaimer {
      position: absolute;
      bottom: 20px;
      left: 35px;
      width: 250px;
    }

    width: 240px;
    border-top: 2px solid #d8312a;
    height: 300px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: 0;
    padding: 100px 40px 40px 40px;
    background: #35394a;
    background: linear-gradient(45deg, #35394a 0%, #1f222e 100%);

    > .title {
      color: rgb(175, 177, 190);
      height: 60px;
      text-align: left;
      font-size: 16px;
    }
  }

  .form-login {
    height: 208px;
    position: absolute;
    left: 0;

    .username,
    .pwd {
    }

    .input-ele {
    }

    .icon {
      position: absolute;
      z-index: 1;
      left: 36px;
      top: 8px;
      opacity: 0.5;
      color: #fff;
      transition: all 0.4s ease-in-out;
    }

    input[type="password"] {
      color: #dc6180 !important;
    }

    input[type="text"],
    input[type="password"] {
      color: #afb1be;
      width: 190px;
      margin-top: -2px;
      background: rgb(50, 54, 74);
      left: 0;
      padding: 10px 65px;
      border-top: 2px solid rgb(57, 61, 82);
      border-bottom: 2px solid rgb(57, 61, 82);
      border-right: none;
      border-left: none;
      outline: none;
      font-family: "Gudea", sans-serif;
      box-shadow: none;
    }

    .form-group {
      position: relative;

      &.focus {
        .icon {
          opacity: 1;
        }
      }
    }

    .action-btns {
      position: relative;
      top: 35px;
      left: 0;
      width: 80%;
      right: 0;
      margin: auto;

      .forgot {
        float: right;
        font-size: 10px;
        margin-top: 11px;

        a {
          color: rgb(96, 100, 121);
        }

        text-decoration: underline;
      }

      .base-btn {
        padding-right: 15px;
        margin-right: 15px;

        &:focus {
          box-shadow: none;
          outline: none;
        }

        border-radius: 50px;
        background: transparent;
        padding: 10px 45px;
        border: 2px solid #dc6180;
        color: #dc6180;
        text-transform: uppercase;
        font-size: 11px;
        transition-property: background, color;
        transition-duration: 0.2s;

        &:hover {
          color: white;
          background: #dc6180;
          cursor: pointer;
          transition-property: background, color;
          transition-duration: 0.2s;
        }
      }
    }
  }
}

.brand {
  position: absolute;
  left: 20px;
  bottom: 14px;

  img {
    width: 30px;
  }
}
</style>
