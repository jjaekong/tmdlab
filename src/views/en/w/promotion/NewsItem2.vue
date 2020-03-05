<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Obtained the non-exclusive license for shape memory polymer from <br>the industrial-educational cooperation group of Yonsei University</h4>
					<span>21st of May, 2019</span>
				</div>
				<div class="modal-body">
					<img class="news-image" src="@/assets/img/promotion/img_news_2.jpg">
					<div class="news-body">
						In order to develop and commercialize the human insertion stent using shape memory polymer, we have obtained the non-exclusive license on the patent: ‘a photo-crosslinkable shape memory polymer and manufacturing method thereof (patent registration number: 10-1906472) (PCT/KR2018/001190)’ retained by the industrial-educational cooperation group of Yonsei University.<br>
						Its enforcement period is from the date of contract conclusion to the expiry date of the patent, and it is applied nationwide as well as all the other nations with the coming patent application after the contract conclusion.<br>
						We have authorized with all the rights through this license involving product/method manufacture, facilitation, delegation and import. This has a significant meaning in earning the right to develop and commercialize the related products using shape memory polymer in the future.
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