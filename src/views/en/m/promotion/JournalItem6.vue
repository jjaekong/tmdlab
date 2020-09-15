<template>
    <div class="modal journal-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">External Self-Closing Tube to Occlude a Vessel Gradually as a Therapeutic Means of Portosystemic Shunt</h5>
                    <span></span>
                </div>
                <div class="modal-body">
                    <dl>
                        <dt>Published at:</dt>
                        <dd>Advances Therapeutics (2020.05.14)</dd>
                        <dt>Summary:</dt>
                        <dd>We develop the external self-closing tube for vascular occlusion, using body temperature-responsive shape memory polymer for user-friendly deployment and proinflammatory palmitic acid for gradual occlusion. These unprecedented functions are demonstrated in rabbit veins, addressing this major issue through gradual but complete vascular occlusion over time.</dd>
                    </dl>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-block btn-list" @click="close()">Close</button>
                    <a class="btn btn-details" href="https://onlinelibrary.wiley.com/doi/10.1002/adtp.202000039" target="_blank">
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