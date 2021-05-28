<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Selected for the recruitment support project for highly experienced researchers supported by the Korea Industrial Technology Association</h4>
					<span>24th of May 2021</span>
				</div>
				<div class="modal-body">
					<img class="news-image" src="@/assets/img/promotion/PC_news_15.jpg">
                    <div class="news-body">
                        The TMD Lab project (manufacture of polymer materials and composite materials) was selected for the recruitment support project for highly experienced researchers in the first half of 2021 supported by the Korea Industrial Technology Association. The subject is qualified for those with more than the standard research experience after obtaining a degree (Doctor: 5 years), and the recruitment support project is conducted for the purpose of helping to strengthen the technology development of small and medium-sized businesses by supporting the labor costs of research personnel for up to 3 years. In this project, TMD Lab will secure functional polymer material development and manufacturing technology, and secure metal and polymer surface treatment technology, thereby enhancing continuous competitiveness in polymer R&amp;D.
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