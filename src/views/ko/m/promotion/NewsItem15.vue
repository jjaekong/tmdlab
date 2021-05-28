<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">한국산업기술진흥협회에서 지원하는 고경력 연구인력 채용지원사업에 과제 선정</h5>
                    <time>2021년 05월 24일</time>
                </div>
                <div class="modal-body">
                    <img class="news-image mt-3" src="@/assets/img/m/promotion/m_news_15.jpg">
                    <p>
                        한국산업기술진흥협회에서 지원하는 2021년 상반기 고경력 연구인력 채용지원사업에 티엠디랩 과제 (고분자 소재 및 복합재료 제조)가 선정되었다. 해당과제는 학위 취득 후 연구경력이 기준 이상인 자에게 자격(박사:5년)이 있고, 최대 3년 동안 연구인력의 인건비를 지원하여 중소기업 기술개발 강화에 도움을 주기위한 목적으로 진행된다. 이 과제에서 티엠디랩은 기능성 고분자 소재 개발 및 제조 기술을 확보하고 금속 및 고분자 표면처리 기술을 확보하여, 고분자 연구개발에 지속적인 경쟁력을 키워가고자 한다.
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