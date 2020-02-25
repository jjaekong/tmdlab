<template>
    <div class="modal journal-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Development of a Shape-Memory Tube to Prevent Vascular Stenosis</h5>
                    <span></span>
                </div>
                <div class="modal-body">
                    <dl>
                        <dt>Published at:</dt>
                        <dd>Advanced Materials (27th of August 2019, IF 25.809)</dd>
                        <dt>Summary:</dt>
                        <dd>A new concept shape memory automatic anastomosis type vessel graft is developed which applies shape memory polymer based technology of recovering its originally programmed form under the human body temperature condition, and which is easily applicable to vessels with different sizes and does not require additional anastomosis procedures.</dd>
                    </dl>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-block btn-list" @click="close()">Close</button>
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
		document.body.classList.add('modal-open')
	},
	destroyed: function() {
		document.body.classList.remove('modal-open')
	},
	methods: {
		close: function() {
			this.$router.push('/m/en/promotion/journal');
		},
	}
}
</script>