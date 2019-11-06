<template>
    <div id="path-nav">
        <ol>
            <li class="home"><img src="@/assets/img/ico_home.png" alt="홈"></li>
            <li v-for="(value, key) in path" :key="key">{{value}}</li>
        </ol>
    </div>
</template>

<script>
export default {
    props: {
        path: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
#path-nav {
    padding-left: pxtovw(60px); //3.125vw
    padding-right: pxtovw(60px);
    height: pxtovw(60px);
    border-bottom: 1px solid #e1e1e1;
    ol {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        height: 100%;
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url(../../../assets/img/separator.png);
            background-repeat: no-repeat;
            background-size: pxtovw(36px) 100%;
            background-position: 0 50%;
            // padding-left: pxtovw(36px);
            padding-left: pxtovw(56px);
            padding-right: pxtovw(20px);
            font-size: pxtovw(16px);
            &.home {
                width: pxtovw(60px);
                background: none;
                padding-left: 0;
                min-width: auto;
                img {
                    width: pxtovw(22px);
                }
            }
        }
    }
}
</style>