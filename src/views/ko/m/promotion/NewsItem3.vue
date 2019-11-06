<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">2019년 한국조직공학재생의학회 (KTERMS) 학술대회 참여, 포스터 부문 우수상 선정 </h5>
                    <time>2019년 6월 6일</time>
                </div>
                <div class="modal-body">
                    <img class="news-image" src="@/assets/img/m/promotion/img_news_3.jpg">
                    <p>
                        한국조직공학 재생의학회가 주관하는 국제학술대회인 <br>
                        ‘Korea Tissue Engineering and Regenerative Medicine <br>
                        Society (KTERMS) 2019’가 2019년 6월 6일부터 8일까지 <br>
                        3일에 걸쳐 제주국제컨벤션센터에서 개최되었다. KTERMS는 <br>
                        의학, 자연과학, 공학 등 재생의학 관련 연구 결과를 공유하고 <br>
                        소통하는 융합 학회로 국내외의 저명한 연구자들의 기조연설 및 <br>
                        다양한 심포지엄으로 구성되었다. <br>
                        이번 학회에서 (주) 티엠디랩은 비루관 확장형 스텐트 <br>
                        (제목: Nasolacrimal stent with shape memory as an <br>
                        alternative to silicone products)와 혈관 외벽 랩핑 스텐트 <br>
                        (제목: External wrapping device to prevent vascular <br>
                        stenosis)에 관한 연구 결과로 포스터 발표를 하였으며, <br>
                        우수 포스터 발표상을 수상하였다.
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