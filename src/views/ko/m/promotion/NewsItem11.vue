<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Enzyme-crosslinkable gelatin gel에 embedding한 줄기세포의 혈관 안정화 및 혈관 신생 유도 논문, 국제 학술지 (Science Advances, IF 12.8) 게재</h5>
                    <time>2020년 2월 26일</time>
                </div>
                <div class="modal-body">
                    <img class="news-image" src="@/assets/img/m/promotion/img_news_11.jpg">
                    <p>
                        ㈜티엠디랩은 microbial transglutaminase-crosslinkable gelatin gel (NO gel)을 이용한 줄기세포의 혈관 안정화 및 혈관 신생 효과를 확인한 연구결과를 Science 자매지인 ‘Science Advances’에 게재하였다 (논문 제목: Hydrogel Crosslinking-Programmed Release of Nitric Oxide Regulates Source-Dependent Angiogenic Behaviors of Human Mesenchymal stem cell).<br><br>
                        본 연구에서는 3차원 nitric oxide (NO) gel에서 골수유래줄기세포 (Bone marrow-derived mesenchymal stem cells, BMSCs)와 지방유래줄기세포 (Adipose tissue-derived mesenchymal stem cells, ADSCs)의 혈관 신생 효과를 비교하였다. 골수줄기세포는 혈관 안정화에 관련된 pericyte-like phenotype에 가까우며 지방줄기세포는 endothelial cell-like phenotype을 나타내었다. 이러한 작용은 NO gel에서 분비된 ammonia가 산화되면서 생성되는 nitrite와 nitrate의 영향에 의한 것임을 확인하였다. 또한 줄기세포를 embedding NO gel을 Rat wound healing 모델에 적용 하였을 때, 골수줄기세포가 embedding된 NO gel의 이식 시 지방줄기세포보다 상처 치유가 효과가 더 높은 것을 확인하였다. 반면 혈관 신생을 확인하기 위해 수행한 gel plug assay에서는 지방줄기세포가 embedding된 NO gel에서 혈관 신생 효율이 골수줄기세포보다 더 높았음을 확인하였다.<br><br>
                        이러한 결과는 향후 혈관의 문제로 뼈가 손상되는 대퇴골두무혈성괴사의 재생 치료 시 NO gel의 사용, 혈관 안정화 또는 혈관 신생을 위한 골수줄기세포 및 지방줄기세포 치료제 개발에 중요한 단서를 제공할 수 있을 것이다.
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