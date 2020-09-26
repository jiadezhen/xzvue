<template>
  <header id="header" class="container">
    <nav class="navbar navbar-light">
      <a class="navbar-brand" href="/">
        <img src="/img/header/logo.png" alt="">
      </a>
      <div class="form-inline">
        <div class="input-group">
          <input type="text" class="form-control p-0"
          placeholder="请输入你要搜索的内容"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"/>
          <div class="input-group-append h-75">
            <img onclick="location.href='products.html'"
            class="btn p-0" src="/img/header/search.png">
          </div>
        </div>
      </div>
      <nav id="signout" class="my-2 my-md-0 mr-md-3 small">
        <a class="p-1 text-muted" href="register.html">注册</a>
        <b class="p-1 text-muted"></b>
        <a class="p-1 text-muted" id="btnLogin" href="#">登录</a>
      </nav>
    </nav>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link text-muted active" href="index.html">首页</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-muted" href="#">学习用品</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-muted" href="#">私人定制</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "MyHeader"
}
</script>

<style scoped>
/*定制搜索框的大小*/
#header>.navbar>.form-inline>.input-group>input{
  width:300px;
}
/*定制主导航当前项的字体颜色*/
#header>.nav .nav-link.active,
#header>.nav .nav-link:hover{
  background: none;
  font-weight: bold;
}
</style>