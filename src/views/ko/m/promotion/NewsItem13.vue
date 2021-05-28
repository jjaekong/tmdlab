<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">2021년 춘계 생체재료학회 우수 논문 발표상 수상</h5>
                    <time>2021년 03월 26일</time>
                </div>
                <div class="modal-body">
                    <img class="news-image mt-3" src="@/assets/img/m/promotion/m_news_13.jpg">
                    <p>
                        2021년 3월 한국생체재료학회가 주관하는 2021년 한국생체재료학회 춘계 학술대회가 온라인 컨퍼런스로 진행되었다. 생체재료학회는 의료용으로 사용되는 생체재료에 관한 연구에 종사하는 연구자, 이를 직접 환자에 사용하는 의학자와 관련된 산업계 종사자들이 함께 모여 학술적, 기술적 정보의 교환을 목적으로 개최하고 있다. 이번 학회에서 ㈜티엠디랩은 형상기억고분자를 기반으로 한 혈관 협착 방지용 의료기기인 혈관외벽 서포트와 녹내장 치료용 의료기기인 녹내장 서포트에 관한 연구결과를 발표하였고, 우수 논문 발표상을 수상하였다. 
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