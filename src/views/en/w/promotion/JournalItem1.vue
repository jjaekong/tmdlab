<template>
    <div class="modal journal-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Development of a Shape-Memory Tube to <br>Prevent Vascular Stenosis.</h4>
                    <span></span>
				</div>
				<div class="modal-body">
					<div class="journal-body">
                        <dl>
                            <dt>Published at:</dt>
                            <dd>Advanced Materials (27th of August 2019, IF 25.809)</dd>
                            <dt>Summary:</dt>
                            <dd>A new concept shape memory automatic anastomosis type vessel graft is developed which applies shape memory polymer based technology of recovering its originally programmed form under the human body temperature condition, and which is easily applicable to vessels with different sizes and does not require additional anastomosis procedures.</dd>
                        </dl>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn" @click="close()">Close</button>
                    <a class="btn btn-details" href="https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201904476" target="_blank">
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