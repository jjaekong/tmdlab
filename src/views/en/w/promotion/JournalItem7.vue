<template>
    <div class="modal journal-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Shape Memory Tube Plug for Fine-control of Intraocular Pressure by Glaucoma Devices.</h4>
                    <span></span>
				</div>
				<div class="modal-body">
					<div class="journal-body">
                        <dl>
                            <dt>Published at:</dt>
                            <dd>ACS Biomaterials Science &amp; Engineering (2020.06.08, IF 4.152)</dd>
                            <dt>Summary:</dt>
                            <dd>We develop a tube-type glaucoma plug based on body temperature-responsive shape memory polymer, which can drain body fluid and thereby finely control the intraocular pressure in rabbit model.</dd>
                        </dl>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn" @click="close()">Close</button>
                    <a class="btn btn-details" href="https://pubs.acs.org/doi/abs/10.1021/acsbiomaterials.0c00649" target="_blank">
                        <img src="@/assets/img/ico_details.png" />
                        Detailed view
                    </a>
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