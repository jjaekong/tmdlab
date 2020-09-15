<template>
    <div class="modal journal-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Anti-Atherogenic Effect of Stem Cell Nanovesicles Targeting Disturbed Flow sites</h5>
                    <span></span>
                </div>
                <div class="modal-body">
                    <dl>
                        <dt>Published at:</dt>
                        <dd>Small (2020.04.16, IF 10.856)</dd>
                        <dt>Summary:</dt>
                        <dd>We demonstrate the anti‐inflammatory and pro‐endothelial recovery effects of PREY‐expressing stem cell derived NVs targeting disturbed flow regions in mouse and porcine partial carotid artery ligation (PCL) models. This nanotechnology‐based targeted treatment of endothelial inflammation is expected to contribute to the development of theragnostic strategies for preventing and treating the progression of atherosclerosis.</dd>
                    </dl>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-block btn-list" @click="close()">Close</button>
                    <a class="btn btn-details" href="https://onlinelibrary.wiley.com/doi/full/10.1002/smll.202000012" target="_blank">
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