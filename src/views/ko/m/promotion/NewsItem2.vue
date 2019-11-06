<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">연세대학교 산학협력단으로부터 형상기억고분자 통상실시권 획득 (2019.05.21)</h5>
                    <time>2019년 5월 21일</time>
                </div>
                <div class="modal-body">
                    <img class="news-image" src="@/assets/img/m/promotion/img_news_2.jpg">
                    <p>
                        형상기억고분자를 이용한 인체삽입형 스텐트의 개발 및 상용화를 <br>
                        위해 연세대학교 산학협력단이 보유하고 있는 “광가교가 가능한<br>
                        형상기억고분자 및 이의 제조방법 (대한민국 특허등록번호10-<br>
                        1906472) (PCT/KR2018/001190)“ 특허에 대한 통상실시권을 <br>
                        획득하였다.  실시기간은 계약체결일부터 특허의 최종 존속기간<br> 
                        만료일까지이며, 대한민국 전역 및 계약 후 특허출원 될 <br>
                        국가 모두에 해당된다. 본 실시권을 이용한 제품/방법 등의 생산, <br>
                        사용, 대여, 수입할 수 있는 모든 권리를 허가 받았으며, <br>
                        향후 형상기억고분자를 이용한 모든 제품의 개발 및 <br>
                        상용화할 수 있는 권리를 획득하였다는 데에 큰 의미가 있겠다.  
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-block btn-list" @click="close()">닫기</button>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
	mounted: function() {
		document.body.classList.add('modal-open')
	},
	destroyed: function() {
		document.body.classList.remove('modal-open')
	},
	methods: {
		close: function() {
			this.$router.push('/m/ko/promotion/news');
		},
	}
}
</script>