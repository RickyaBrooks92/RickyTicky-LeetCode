class Solution(object):
    def arrangeCoins(self, n):
        """
        :type n: int
        :rtype: int
        """
        sCount = 0
        stairs = 1
        while n >= 0:
            n = n - stairs
            if n >= 0:
                sCount += 1
                stairs += 1
            
        return sCount