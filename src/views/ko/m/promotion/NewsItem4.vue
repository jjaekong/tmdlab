<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">2019년 의료기기 CHAMP 교육과정 의료기기 입문 마스터 과정 수료 (2019.07.16 ~ 2019.07.18)</h5>
                    <time>2019년 7월 16일</time>
                </div>
                <div class="modal-body">
                    <img class="news-image" src="@/assets/img/m/promotion/img_news_4.jpg">
                    <p>
                        2019년 7월 16일부터 18일까지 3일에 걸쳐 <br>
                        한국의료기기산업협회 (KMDIA)에서 주관하는 <br>
                        국가인적자원개발컨소시엄 사업 (Consortium for HRD Ability <br>
                        Magnified Program, CHAMP) 교육을 <br>
                        (주) 티엡디랩 전 직원이 수료하였다. 교육을 통해 의료기기 규정, <br>
                        인허가 제도부터 의료기기 사후관리까지 의료기기산업 전반에 <br>
                        걸친 의료기기 기본사항을 이해하고 <br>
                        의료기기산업계 종사자로서 역량을 강화할 수 있는 기회가 되었다. 
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