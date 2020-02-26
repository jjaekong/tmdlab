<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>‘Innovative assignment for company creation’ selected out of the company creation, growth and technology development project held by Ministry of SMEs and Startups</h4>
					<span>25th of November 2019</span>
				</div>
				<div class="modal-body">
					<!-- <img class="news-image" src="@/assets/img/promotion/img_news_4.jpg"> -->
					<div class="news-body">
						TMD LAB Corporation is finally selected as the ‘innovative assignment for company creation’ out of the company creation, growth and technology development project supported by Ministry of SMEs and Startups. Project development period of this time is overall 24 months from November 2019 to 2021, with its research support worth KRW 400,000,000. This assignment involves the study of developing and commercializing the lacrimal duct tube based on shape memory polymer, with the purpose of treating nasolacrimal duct stenosis and occlusion.
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn"  @click="close()">Close</button>
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
			this.$router.push('/w/en/promotion/news');
		},
	}
}
</script>