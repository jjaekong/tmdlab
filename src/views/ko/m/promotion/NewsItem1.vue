<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">형상기억고분자를 이용한 스텐트 관련 특허 2건 출원 (2018.12.19)</h5>
                    <time>2018년 12월 19일</time>
                </div>
                <div class="modal-body">
                    <img class="news-image" src="@/assets/img/m/promotion/img_news_1.jpg">
                    <p>
                        형상기억고분자를 스텐트 개발과 관계된 특허 2건을 출원하였다.<br>
                        첫번째 특허명은 “형상 기억 스텐트의 폐색부위 펼침시 저분자<br>
                        헤파린 방출구조체 (출원번호 10-2018-0164737)＂로<br>
                        폐색된 혈관에 삽입 시 헤파린이 스텐트로부터 방출되며<br> 
                        펼쳐지는 형상기억고분자 혈관 이식용 생체적합성 스텐트에 관한<br>
                        내용이다. 두번째 특허명은  “ 형상 기억 스텐트의 생 불분해성<br>
                        코팅제 조성물 (출원번호 10-2018-0164738)”로 생 불분해성<br>
                        형상기억고분자 스텐트에 관한 내용으로, 이 두가지 특허를<br>
                        통해 생 분해성 및 생 불분해성 형상기억고분자 혈관 스텐트에<br>
                        관한 권리를 모두 확보할 수 있게 되었다는데 의의가 있다. 
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