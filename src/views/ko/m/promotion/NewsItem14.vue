<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">혈관외벽 서포트 연구 논문, Small journal cover 선정 (2021.05)</h5>
                    <time>2021년 05월 06일</time>
                </div>
                <div class="modal-body">
                    <img class="news-image mt-3" src="@/assets/img/m/promotion/m_news_14.jpg">
                    <p>
                        2021년 3월 17일 Small (IF 11.459)에 게재된 혈관외벽 서포트 연구 논문(Dilation-Responsive Microshape Programming Prevents Vascular Graft Stenosis)이 2021년 5월호(Vol.17 No.18) cover를 장식하였습니다.
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