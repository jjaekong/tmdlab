<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Thesis on vessel stabilization and vessel generation induction of the stem cell embedded to the enzyme-crosslinkable gelatin gel published at the international academic journal (Science Advances, IF 12.8)</h5>
                    <time>26th February 2020</time>
                </div>
                <div class="modal-body">
                    <img class="news-image" src="@/assets/img/m/promotion/img_news_11.jpg">
                    <p>
                        TMD LAB published the research result which confirms the vessel stabilization and vessel generation effects of the stem cell using the microbial transglutaminase-crosslinkable gelatin gel (NO gel), at ‘Science Advances’ as a sister journal to Science (title: Hydrogel Crosslinking-Programmed Release of Nitric Oxide Regulates Source-Dependent Angiogenic Behaviors of Human Mesenchymal stem cell).<br><br>
                        This study is based on the 3-dimensional nitric oxide (NO) gel, and compares the vessel generation effect of the bone marrow-derived mesenchymal stem cells (BMSCs), with that of the adipose tissue-derived mesenchymal stem cells (ADSCs). BMSCs are close to a pericyte-like phenotype related to vessel stabilization, where the ADSCs are shown to be the endothelial cell-like phenotype. These relations are confirmed to affected by nitrite and nitrate, which are created when ammonia from the NO gel is oxidized. When the NO gel embedded with the stem cell is applied to a rat wound healing model, it is also confirmed that NO gel implantation embedded with the BMSCs has a higher healing effect than that embedded with the ADSCs. During the gel plug assay conducted with the purpose of verifying vessel generation on the other hand, the NO gel embedded with the ADSCs showed a higher vessel generation effect than that embedded with the BMSCs.<br><br>
                        This result may provide critical leads in the future in utilizing the NO gel when treating avascular necrosis for a femoral head which deteriorates the bone due to vessel issues, and in developing BMSCs and ADSCs medicine for vessel stabilization and vessel generation.
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-block btn-list" @click="close()">Close</button>
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
			this.$router.push('/m/en/promotion/news');
		},
	}
}
</script>