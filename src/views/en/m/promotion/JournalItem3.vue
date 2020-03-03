<template>
    <div class="modal journal-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Microchannel Network Hydrogel Induced Ischemic Anastomotic Blood Perfusion</h5>
                    <span></span>
                </div>
                <div class="modal-body">
                    <dl>
                        <dt>Published at:</dt>
                        <dd>Nature Communication (2020.01.30, IF 11.88)</dd>
                        <dt>Summary:</dt>
                        <dd>Micro-channel network is developed based on gelatin hydrogel in order to overcome the diffusion limit of nutrients and oxygen in a 3-dimensional way. Developed hydrogel is implanted to the ischemic mouse and pig models. It is confirmed that the severely deteriorated tissue due to anastomosis with adjacent tissues and micro-channel perfusion is successfully generated.</dd>
                    </dl>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-block btn-list" @click="close()">Close</button>
                    <a class="btn btn-details" href="https://www.nature.com/articles/s41467-020-14480-0" target="_blank">
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