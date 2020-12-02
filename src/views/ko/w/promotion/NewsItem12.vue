<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>티엠디랩-연세대 의대 공동연구, ‘의료기기 맞춤형 소재’ 국책과제 선정</h4>
					<span>2020년 9월 15일</span>
				</div>
				<div class="modal-body">
					<div class="news-body">
                        <b>-	체온에 반응하는 첨단 형상기억고분자 원천기술로 ‘인체삽입형 의료기기’ 분야의 새 시대 열어</b>
                        <br><br>
						첨단 신소재 인체삽입형 의료기기 벤처기업 티엠디랩(대표 강미란)은 연세대 의대와의 공동연구가 재단법인 범부처전주기의료기기연구개발사업단 주관 ‘4차 산업혁명 및 미래의료환경 선도사업’의 ‘의료기기 맞춤형 소재 및 소자’ 분야 신규 과제로 선정됐다고 15일 밝혔다. 
                        <br><br>
                        이번에 국책 과제로 선정된 연구는 외과 이식술의 성공률 개선을 위해 ‘혈관 문합부 보조용 체온 감응형 의료기기’를 개발하는 과제이다. 이번 과제를 통해 장기이식 수술, 유방재건 수술 등의 외과 수술 시 혈관 내부의 협착을 방지하는 인체삽입형 고분자 의료기기를 개발해 제품화하고 4년간 모두 30억원 규모의 사업비 중 25억원을 정부로부터 지원받을 예정이다. 
                        <br><br>
                        주관연구기관인 연세대학교 의과대학 성학준 교수 연구팀과 세브란스 외과 전문의 팀은 시제품의 생물학적안전성, 물성, 물리화학적 성능 평가와 전임상 시험을 실시하고, 티엠디랩은 강도가 개선된 생체 신호 감응 고분자 소재의 개발과 고분자 대량 합성 시스템의 구축을 진행하게 된다. 티엠디랩의 등기이사인 성학준 연세대 의대 교수는 미국 조지아공대, 밴더빌트대 등에서 교수를 지낸 바 있으며, 고분자 연구 분야의 권위자로 꼽힌다. 
                        <br><br>
                        티엠디랩 강미란 대표는 “혈관 문합부의 협착 방지와 맥관 재생에 관련된 의료기기는 현재 유사제품이 전무한 상태”라며, “체온에서 반응하는 티엠디랩만의 형상기억고분자 원천기술은 혈관이나 비혈관 스텐트, 인조포, 니들형 패치 등 다양한 인체삽입형 의료기기 시장에 적용할 수 있다”고 설명했다.
                        <br><br>
                        한편, 국내 3D 프린팅 선두 기업인 캐리마(대표 이병극)도 이번 과제에 참여기관으로 3D 프린팅 기반 체온 감응 고분자의 제품 제조 기술을 연구하게 된다.
					</div>
                    <img class="news-image" src="@/assets/img/promotion/img_news_12_ko.jpg">
                    <div class="news-body">
                        [그림. 혈관 문합부 협착 방지 및 맥관 재생 용 시제품 작용원리] 인체에 삽입된 이후 체온에 의해 혈관 외벽을 감싸주는 형태로 복원되는 고분자 소재가 적용된다. 
                        <br><br>
                        <b>주식회사 티엠디랩</b><br>
						첨단 신소재인 형상기억 고분자(Shape Memory Polymer, SMP)를 이용하여 누관 스텐트, 혈관 외벽 스텐트, 담(췌)관 스텐트 등 인체 삽입형 의료기기 및 의약품을 연구개발중인 업체이다. 체온 근처에서 빠른 형상 복원력을 갖는 고분자 원천 기술을 보유하고 있어 인체에 상처를 최소한으로 남길 수 있는 시술이 특징이다.
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn"  @click="close()">닫기</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted: function() {
		document.body.classList.add('modal-open');
		var self = this;
		window.setTimeout(function() {
			self.$el.style.display = 'flex'
		}, 500)
	},
	destroyed: function() {
		document.body.classList.remove('modal-open')
	},
	methods: {
		close: function() {
			this.$router.push('/w/ko/promotion/news');
		},
	}
}
</script>