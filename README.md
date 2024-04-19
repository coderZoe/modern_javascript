本仓库代码是JS教程：[现代 JavaScript 教程](https://zh.javascript.info/)的课后练习题

<script>
    ````
    fetch(https://api.github.com/users/coderzoe)
    .then(response => response.json())
    .then(user => {
        let img = document.createElement('img')
        let src = user.avatar_url;
        document.body.append(img)
    })
    ````
</script>