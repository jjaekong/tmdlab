<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Applied for 2 patents related to stent using shape memory polymer (19th of December,<br>2018)</h4>
					<span>19th of December, 2018</span>
				</div>
				<div class="modal-body">
					<img class="news-image" src="@/assets/img/promotion/img_news_1.jpg">
					<div class="news-body">
						2 patents have been applied related to stent development using shape memory polymer. First is ‘low molecular heparin-releasing structure in spreading shape memory polymer stent at the point of occlusion (application number: 10-2018-0164737)’. It holds the contents on the biocompatible vascular transplantation SMP stent. When inserted into the occlusive blood vessel, heparin is emitted from the stent and unfolds itself.<br>
						Second patent is: ‘development of non-degradable stent coating material (application number: 10-2018-0164737)’, holding the contents of non-degradable SMP stent. It has its significance that we have secured all the related rights on both degradable and non-degradable SMP vascular stents, through these two patents.
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn" @click="close()">Close</button>
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