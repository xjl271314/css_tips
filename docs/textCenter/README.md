### 纯CSS实现文字一行居中，多行左对齐的方法。

其实这种需求还是蛮常见的。主要用于产品列表页面，用于产品图片下面，显示产品的名称。当产品名称很短的时候就居中显示，产品名称较长的时候就居左显示。

#### 利用行内元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>文字测试</title>
</head>
<body>
<ul>
    <li><p>一行文字</p></li>
    <li><p>这里是比较长的两行文字</p></li>
</ul>
</body>
</html>
```

```css
ul {
    width: 500px;
    margin: 100px auto;
    overflow: hidden;
}
li {
    /* 这些都不重要 */
    float: left;
    width: 100px;
    background: #fafafa;
    height: 50px;
    margin-right: 10px;
    /* 重点 */
    text-align: center;
}
/* 重点 */
p {
    display: inline-block;
    text-align: left;
}
```
:::tip
关键是让`li`元素使`p`元素居中 然后`p`元素文本居中。
:::
