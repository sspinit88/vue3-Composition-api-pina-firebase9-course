import { computed, nextTick, onMounted, reactive, watch } from 'vue';

export function useCounter() {
	const counterData = reactive({
		count: 0,
		title: 'My Counter'
	})
	
	watch(() => counterData.count, (newCount) => {
		if (newCount === 20) {
			alert('Way to go! You made it to 20!!');
		}
	})
	
	const oddOrEven = computed(() => {
		if (counterData.count % 2 === 0) return 'even';
		return 'odd';
	})
	
	const blur = (e): Promise<any> => {
		return nextTick(() => {
			console.log('DOM is updated with nextTick');
		});
	};
	
	// @ts-ignore
	const increaseCounter = async (amount: number, e: Event) => {
		counterData.count += amount;
		await blur(e);
	}
	
	// @ts-ignore
	const decreaseCounter = async (amount: number, e: Event) => {
		counterData.count -= amount;
		await blur(e);
	}
	
	onMounted(() => {
		console.log('Do stuff related to Counter');
	});
	
	return {
		counterData,
		increaseCounter,
		decreaseCounter,
		oddOrEven
	};
}
