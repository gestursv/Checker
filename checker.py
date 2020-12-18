
#!/usr/bin/env python 3
# -*- coding: utf-8 -*-

#Define legit objects - Perhaps it would make sense to have it in a resource file

LegitPhrasesAndHeads = [
#Phrases
'IP-INF','IP-MAT','IP-MAT-PRN','IP-SUB','IP-SUB-PRN','IP-IMP','IP-SMC','IP-PPL','IP-.*','IP-(MAT|SUB)',
'CP-THT','CP-CAR','CP-CLF','CP-CMP','CP-DEG','CP-FRL','CP-REL','CP-QUE','CP-ADV','CP-EOP','CP-TMC','CP-.*','N+CP*',
'NP','NP-ADV','NP-CMP','NP-PRN','NP-SBJ','NP-OB1','NP-OB2','NP-OB3','NP-PRD','NP-POS','NP-.*','NP*',
'ADJP','ADJP-SPR','ADJP.*',
'PP','PP-BY','PP-PRN','PP.*'
'ADVP','ADVP-DIR','ADVP-LOC','ADVP-TMP','ADVP-.*','ADVP*',
'RP',
'CONJP',
'WNP','WPP',
#heads 
'N-N','N-A','N-D','N-G','N-.*',
'NS-N','NS-A','NS-D','NS-G','NS-.*',
'NPR-N','NPR-A','NPR-D','NPR-G','NPR-.*',
'NPRS-N','NPRS-A','NPRS-D','NPRS-G','NPRS-.*',
'ONE',
'D-N','D-A','D-D','D-G','D-.*',
'WD-N','WD-A','WD-D','WD-G','WD-.*',
'PRO-N','PRO-A','PRO-D','PRO-G','PRO-G.*',
'WPRO-N','WPRO-A','WPRO-D','WPRO-G','WPRO-.*',
'ADJ-N','ADJ-A','ADJ-D','ADJ-G','ADJ.*',
'ADJR-AN','ADJR-A','ADJR-D','ADJR-G','ADJR-.*'
'ADJS-N','ADJS-A','ADJS-D','ADJS-G','ADJS-.*'
'ADJ',
'WADJ-N','WADJ-A','WADJ-D','WADJ-G','WADJ-.*',
'SUCH-N','SUCH-A','SUCH-D','SUCH-G','SUCH-.*'
'Q-N','Q-A','Q-D','Q-G','Q-.*',
'QR-N','QR-A','QR-D','QR-G','QR-.*',
'QS-N','QS-A','QS-D','QS-G','QS-.*',
'WQ', 
'ADV','WADV',
'P',
'RP','RPX',
'FP',
'BEPI','BEPS','BEDI','BEDS','BEI','BAG','BEN','BAN','BE.*','B.*',
'DOPI','DOPS','DODI','DODS','DOI','DAG','DON','DAN','DO.*','D.*',
'HVPI','HVPS','HVDI','HVDS','HVI','HAG','HVN','HAN','HV.*','H.*',
'MDPI','MDPS','MDDI','MDDS','MDI','MAG','MDN','MAN','MD.*','M.*',
'RDPI','RDPS','RDDI','RDDS','RDI','RAG','RDN','RAN','RD.*','R.*',
'VBPI','VBPS','VBDI','VBDS','VBI','VAG','VBN','VAN','VBP','VBD','VBN','VAN','VAG','VB.*','V.*'
'.*PI','.*PS','.*DI','.*DS','.*DI',

'MD','HV','RD','LS','FW'
]

#define legit relations
LegitRelations = [
'idoms','idomsonly','idomsfirst','idomslast','doms','sprec','precedes','hassister','sameindex'
]

#One class holding all staticmethods needed 
class Winput(object):
    
#from the whole input, first we only take the first part, the request part    
    @staticmethod
    def OnlyPhrases(op):
        rawlist=(op.splitlines (False))
        newlist = []
        for line in rawlist:
            if line == "":
                break
            newlist.append(line)
        return newlist    

#make sure that only three objects are in each line
    @staticmethod
    def CountInLines (firstres):
        for line in firstres:
            if len(line.split()) != 3:
                print ("There has to be three items in each line: PHRASE relationship PHRASE.")
                print ("Check this one: " + str(line) + ". It looks like there are " + str(len(line.split())))
                print ()
                CountOfItemsCheck = "Count of Items has to be three in each line."
                break
            CountOfItemsCheck = "Count of Items adds up"
        return CountOfItemsCheck

#Check all three objects in each line
    @staticmethod
    def CheckPhrases(FirstAndThird):
        for line in FirstAndThird:
            print ()
            print ("Reading objects of " + str(line))
            Winput.CheckIfPhrase (line.split()[0])
            Winput.CheckIfRelation (line.split()[1])
            Winput.CheckIfPhrase (line.split()[2])
        return

#Check if the phrase is in the legit phrase list
    @staticmethod            
    def CheckIfPhrase(phrase):
        Winput.CheckIfCaps (phrase) #call and check if the phrase is uppercase
        if phrase not in LegitPhrasesAndHeads:
            print (str(phrase) + " is not a legit phrase")
            pass
        pass

    @staticmethod
    def CheckIfCaps(phrase):
        if phrase.isupper() == False:
            print ("All phrases have to be uppercase, like: " + str(phrase.upper()))
            pass
        
    @staticmethod
    def CheckIfRelation(relation):
        if relation not in LegitRelations:
            print(str(relation) + " is not a legit relation type") 
            pass
        pass

#Here I put ten phrses to test the checker. Only one is correct, the other have different errors in it.
        
text = "IP-MAT sproc MDPI\nIP-MAT sprec MDPI\nIP-MAT sprec MDPI\nIP-MAT sprecs MDPI\n\nBLEBLE"

SplitToLines = Winput.OnlyPhrases(text)# Run splittolines
CheckItemCountInLine = Winput.CountInLines (SplitToLines)# Run CheckItemCount
Winput.CheckPhrases (SplitToLines)#Run CheckPhrase