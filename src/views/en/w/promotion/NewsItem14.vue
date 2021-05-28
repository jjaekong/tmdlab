<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Outer Vascular Wall Support Research Paper, Selected as Small Journal Cover (2021.05)</h4>
					<span>6th of May 2021</span>
				</div>
				<div class="modal-body">
					<img class="news-image" src="@/assets/img/promotion/PC_news_14.jpg">
                    <div class="news-body">
                        Outer Vascular Wall Support Research Paper(Dilation-Responsive Microshape Programming Prevents Vascular Graft Stenosis), published in Small (IF 11.459) on March 17, 2021, made the cover of the May 2021 issue (Vol.17 No.18).
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