<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Graduated the entrance master course for medical devices, under the medical device<br>CHAMP curriculum 2019 (16th of July, 2019 – 18th of July, 2019)</h4>
					<span>16th of July, 2019</span>
				</div>
				<div class="modal-body">
					<img class="news-image" src="@/assets/img/promotion/img_news_4.jpg">
					<div class="news-body">
						All employees in TMD LAB Corporation have completed 3-day CHAMP training course (Consortium for HRD Ability Magnified Program) from 16th to 18th in 2019, held by KMDIA (Korea Medical Devices Industry Association). Through the course, the opportunity was given to understand basic contents on medical devices for overall medical device industries from licensing to post-management on the medical devices, and to strengthen one’s ground as the medical device industry personnel.
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