<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Participated into the KTERMS (Korean Tissue Engineering and Regenerative Medicine<br>Society) conference event 2019, selected to be awarded ‘superb’ in the poster division</h4>
					<span>6th of June, 2019</span>
				</div>
				<div class="modal-body">
					<img class="news-image" src="@/assets/img/promotion/img_news_3.jpg">
					<div class="news-body">
						KTERMS (Korea Tissue Engineering and Regenerative Medicine Society) has held its own international academic conference for 3 days from 6th to 8th of June in 2019, at International Convention Center Jeju. KTERMS is an integrated academic conference which shares and presents the research results on regenerative medicine in medical, natural science and engineering fields. It also involved a variety of symposiums, as well as keynote addresses from prominent researchers worldwide.<br>
						TMD LAB Corporation in this conference has made poster presentations on the research result, which have been awarded with the ‘superb poster presentation reward’, of: Nasolacrimal stent with shape memory as an alternative to silicone products, and External wrapping device to prevent vascular stenosis.
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
			this.$router.push('/w/en/promotion/journal');
		},
	}
}
</script>