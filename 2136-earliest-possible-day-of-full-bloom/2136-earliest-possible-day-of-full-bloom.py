class Solution:
    def earliestFullBloom(self, plantTime: List[int], growTime: List[int]) -> int:
        # in general, it would be best to plant the seeds with the longest grow time first
        
        paired = sorted(zip(plantTime, growTime), key=lambda x: x[1], reverse=True)
        bloom_time = 0
        maturity_time = 0
        
        for p, g in paired:
            bloom_time += p
            maturity_time = max(g, maturity_time - p)
        
        bloom_time += maturity_time
        return bloom_time

        